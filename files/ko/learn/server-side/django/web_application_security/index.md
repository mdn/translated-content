---
title: Django web application security
slug: Learn/Server-side/Django/web_application_security
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

사용자의 데이터를 보호하는 것은 모든 웹사이트 개발에서 중요한 부분입니다. 우리는 이전의 강의 [Web security](/ko/docs/Web/Security) 에서 자주 나타나는 보안 위협에 대해 알아봤습니다. — 이번 강의에서는 장고의 내장 보안 기능이 이런 위험에 어떻게 대처하는지 실제 예시들을 통해 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">이 문서를 보기 전에:</th>
      <td>
        서버사이드 개발에 대한 "<a
          href="https://developer.mozilla.org/ko/docs/Learn/Server-side/First_steps/Website_security"
          >Website security</a
        >" 부분을 읽고 오세요. MDN 장고 튜토리얼에서 적어도
        <a href="/ko/docs/Learn/Server-side/Django/Forms"
          >Django Tutorial Part 9: Working with forms</a
        >
        까지는 모두 알고있어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        장고 웹사이트의 보안을 위해 해야 하는 (하지 말아야 하는) 것들에 대해
        이해해 봅시다.
      </td>
    </tr>
  </tbody>
</table>

## 개요

[Website security](/ko/docs/Web/Security) 문서는 서버사이드 설계에서 웹사이트 보안이란 무엇을 이야기하는건지, 또한 개발자가 막아내야 하는 몇가지 대표적인 위협에 대해 소개합니다. 이 문서에서 중요한 내용중의 하나는 바로 웹 애플리케이션이 브라우저에서 전송된 데이터를 신뢰하는 경우에는 거의 모든 종류의 공격이 가능하다는 것입니다.

> **경고:** **Important:** 웹사이트 보안에 대해 당신이 배울 수 있는 가장 중요한 점 한가지는 **브라우저의 데이터를 절대로 믿지 말라는 것** 입니다. 이건 URL 파라미터의 `GET` request 데이터, `POST` 데이터, HTTP 헤더와 쿠키, 사용자가 업로드한 파일들...기타등등을 포함합니다. 언제나 전송받는 모든 데이터를 의심하고 체크하십시오. 언제나 최악을 가정하십시오.

Django 사용자들에게 좋은 소식은 대부분의 일반적인 위협들은 프레임워크에 의해 차단된다는 것입니다! [Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/) 문서는 Django의 보안 개요와 Django 기반의 웹사이트를 어떻게 지킬 수 있는지에 대해 설명하고 있습니다.

## Common threats/protections

Django 문서를 여기로 복사해오기보다, 이 문서에서 우리는 Django [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) 튜토리얼에 있는 Django의 몇가지 보안 형태를 묘사해보도록 하겠습니다.

### Cross site scripting (XSS)

XSS is a term used to describe a class of attacks that allow an attacker to inject client-side scripts _through_ the website into the browsers of other users. This is usually achieved by storing malicious scripts in the database where they can be retrieved and displayed to other users, or by getting users to click a link that will cause the attacker's JavaScript to be executed by the user's browser.

Django's template system protects you against the majority of XSS attacks by [escaping specific characters](https://docs.djangoproject.com/en/2.0/ref/templates/language/#automatic-html-escaping) that are "dangerous" in HTML. We can demonstrate this by attempting to inject some JavaScript into our LocalLibrary website using the Create-author form we set up in [Django Tutorial Part 9: Working with forms](/ko/docs/Learn/Server-side/Django/Forms).

1. Start the website using the development server (`python3 manage.py runserver`).
2. Open the site in your local browser and login to your superuser account.
3. Navigate to the author-creation page (which should be at URL: [`http://127.0.0.1:8000/catalog/author/create/`](http://127.0.0.1:8000/catalog/author/create/)).
4. Enter names and date details for a new user, and then append the following text to the Last Name field:
   `<script>alert('Test alert');</script>`.
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > **참고:** This is a harmless script that, if executed, will display an alert box in your browser. If the alert is displayed when you submit the record then the site is vulnerable to XSS threats.

5. Press **Submit** to save the record.
6. When you save the author it will be displayed as shown below. Because of the XSS protections the `alert()` should not be run. Instead the script is displayed as plain text.![Author detail view XSS test](author_detail_alert_xss.png)

If you view the page HTML source code, you can see that the dangerous characters for the script tags have been turned into their harmless escape code equivalents (e.g. `>` is now `&gt;`)

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Using Django templates protects you against the majority of XSS attacks. However it is possible to turn off this protection, and the protection isn't automatically applied to all tags that wouldn't normally be populated by user input (for example, the `help_text` in a form field is usually not user-supplied, so Django doesn't escape those values).

It is also possible for XSS attacks to originate from other untrusted source of data, such as cookies, Web services or uploaded files (whenever the data is not sufficiently sanitized before including in a page). If you're displaying data from these sources, then you may need to add your own sanitisation code.

### Cross site request forgery (CSRF) protection

CSRF attacks allow a malicious user to execute actions using the credentials of another user without that user's knowledge or consent. For example consider the case where we have a hacker who wants to create additional authors for our LocalLibrary.

> **참고:** Obviously our hacker isn't in this for the money! A more ambitious hacker could use the same approach on other sites to perform much more harmful tasks (e.g. transfer money to their own accounts, etc.)

In order to do this, they might create an HTML file like the one below, which contains an author-creation form (like the one we used in the previous section) that is submitted as soon as the file is loaded. They would then send the file to all the Librarians and suggest that they open the file (it contains some harmless information, honest!). If the file is opened by any logged in librarian, then the form would be submitted with their credentials and a new author would be created.

```html
<html>
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <table>
        <tr>
          <th><label for="id_first_name">First name:</label></th>
          <td>
            <input
              id="id_first_name"
              maxlength="100"
              name="first_name"
              type="text"
              value="Mad"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_last_name">Last name:</label></th>
          <td>
            <input
              id="id_last_name"
              maxlength="100"
              name="last_name"
              type="text"
              value="Man"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_birth">Date of birth:</label></th>
          <td>
            <input id="id_date_of_birth" name="date_of_birth" type="text" />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_death">Died:</label></th>
          <td>
            <input
              id="id_date_of_death"
              name="date_of_death"
              type="text"
              value="12/10/2016" />
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Run the development web server, and log in with your superuser account. Copy the text above into a file and then open it in the browser. You should get a CSRF error, because Django has protection against this kind of thing!

The way the protection is enabled is that you include the `{% csrf_token %}` template tag in your form definition. This token is then rendered in your HTML as shown below, with a value that is specific to the user on the current browser.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django generates a user/browser specific key and will reject forms that do not contain the field, or that contain an incorrect field value for the user/browser.

To use this type of attack the hacker now has to discover and include the CSRF key for the specific target user. They also can't use the "scattergun" approach of sending a malicious file to all librarians and hoping that one of them will open it, since the CSRF key is browser specific.

Django's CSRF protection is turned on by default. You should always use the `{% csrf_token %}` template tag in your forms and use `POST` for requests that might change or add data to the database.

### Other protections

Django also provides other forms of protection (most of which would be hard or not particularly useful to demonstrate):

- SQL injection protection
  - : SQL injection vulnerabilities enable malicious users to execute arbitrary SQL code on a database, allowing data to be accessed, modified, or deleted irrespective of the user's permissions. In almost every case you'll be accessing the database using Django's querysets/models, so the resulting SQL will be properly escaped by the underlying database driver. If you do need to write raw queries or custom SQL then you'll need to explicitly think about preventing SQL injection.
- Clickjacking protection
  - : In this attack a malicious user hijacks clicks meant for a visible top level site and routes them to a hidden page beneath. This technique might be used, for example, to display a legitimate bank site but capture the login credentials in an invisible [`<iframe>`](/ko/docs/Web/HTML/Element/iframe) controlled by the attacker. Django contains [clickjacking protection](https://docs.djangoproject.com/en/2.0/ref/clickjacking/#clickjacking-prevention) in the form of the [`X-Frame-Options middleware`](https://docs.djangoproject.com/en/2.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware) which, in a supporting browser, can prevent a site from being rendered inside a frame.
- Enforcing SSL/HTTPS
  - : SSL/HTTPS can be enabled on the web server in order to encrypt all traffic between the site and browser, including authentication credentials that would otherwise be sent in plain text (enabling HTTPS is highly recommended). If HTTPS is enabled then Django provides a number of other protections you can use:
- [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) can be used to check whether content is secure, even if it is incoming from a non-HTTP proxy.
- [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) is used to redirect all HTTP requests to HTTPS.
- Use [HTTP Strict Transport Security](https://docs.djangoproject.com/en/2.0/ref/middleware/#http-strict-transport-security) (HSTS). This is an HTTP header that informs a browser that all future connections to a particular site should always use HTTPS. Combined with redirecting HTTP requests to HTTPS, this setting ensures that HTTPS is always used after a successful connection has occurred. HSTS may either be configured with [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) and [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) or on the Web server.
- Use 'secure' cookies by setting [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) and [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) to `True`. This will ensure that cookies are only ever sent over HTTPS.
- Host header validation
  - : Use [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-ALLOWED_HOSTS) to only accept requests from trusted hosts.

There are many other protections, and caveats to the usage of the above mechanisms. While we hope that this has given you an overview of what Django offers, you should still read the Django security documentation.

## Summary

Django has effective protections against a number of common threats, including XSS and CSRF attacks. In this article we've demonstrated how those particular threats are handled by Django in our _LocalLibrary_ website. We've also provided a brief overview of some of the other protections.

This has been a very brief foray into web security. We strongly recommend that you read [Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/) to gain a deeper understanding.

The next and final step in this module about Django is to complete the [assessment task](/ko/docs/Learn/Server-side/Django/django_assessment_blog).

## See also

- [Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/) (Django docs)
- [Server side website security](/ko/docs/Web/Security) (MDN)
- [Web security](/ko/docs/Web/Security) (MDN)
- [Securing your site](/ko/docs/Web/Security/Securing_your_site) (MDN)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
