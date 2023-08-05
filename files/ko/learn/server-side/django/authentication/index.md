---
title: "Django Tutorial Part 8: User authentication and permissions"
slug: Learn/Server-side/Django/Authentication
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

이 튜토리얼에서는, 당신의 사이트에 그들의 계정으로 로그인을 어떻게 허락할 것인지, 그리고 그들의 로그인 여부와 그들에게 허가한 퍼미션에 따라서 사이트에서 무엇을 할 수 있게 하거나, 볼 수 있게 할 것인지에 대해서 알려줄 것입니다. 또한 예시의 일부분으로, 우리는 이 LocalLibrary website를 확장시켜서, 로그인, 로그아웃 페이지를 덧붙이고, 사용자와 staff들이 그들이 빌려간 책들을 볼 수 있는 특별한 페이지들도 추가할 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행학습:</th>
      <td>
        앞의 모든 튜토리얼을 모두 끝내세요. up to and including
        <a href="/ko/docs/Learn/Server-side/Django/Sessions"
          >Django Tutorial Part 7: Sessions framework</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>사용자 인증과 허가를 어떻게 셋업하고, 이용하는 지에 대해 이해하기</td>
    </tr>
  </tbody>
</table>

## 개요

Django는 인증과 권위 부여 ("허가") 시스템을 제공합니다. 이것은 [previous tutorial](/ko/docs/Learn/Server-side/Django/Sessions) 에서 논의된 session framework에서 찾아볼 수 있는데, 사용자의 credentials을 검증하고 사용자들이 행동들의 허가 여부를 정의합니다. 이 프레임워크는 `Users` 와 `Groups` (한 번에 한 명 이상의 유저에게 허가를 적용하는 일반적인 방법)을 위한 빌트인 모델을 포함하는데, permissions/flags는 that designate whether 사용자들이 일이나 , forms, 로그인 한 유저들의 뷰, 그리고 컨텐츠를 제한하는 뷰 툴을 조정합니다.

> **참고:** Django의 인증시스템은 매우 일반적인 것을 목표로하기 때문에, 다른 웹사이트 인증시스템에서 제공하는 특정한 기능들을 제공하지 않습니다. 이런 문제에 대한 해결방법은 서드파티 솔루션을 이용하는 것입니다. 예를 들면, 로그인 시도 제한과 제3자에 대한 인증(e.g.OAuth)과 같은 기능들은 제공하지 않습니다.

이 튜토리얼에서 우리는 [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) website안에서의 유저 인증을 어떻게 활성화하는지 보여주고, 당신의 로그인, 로그아웃 페이지를 만들며 당신의 모델과 페이지에 대한 권한 및 그 조정에 대해서 살펴볼 것입니다. 우리는 인증과 허가(권한)을 사용해서 사용자나 사서가 빌린 책들을 표시할 것입니다.

이 인증시스템은 매우 유연하므로 당신이 원한다면 단지 제공된 로그인 API를 호출하는 것만으로 scratch에서 온 당신의 URLs, forms, views와 templates를 작성할 수 있습니다. 그렇지만, 이 단계에서는 Django가 "보유한" 인증 views와 forms를 이용하여 우리의 로그인과 로그아웃페이지를 만들 것입니다. 우리는 여전히 어떤 템플릿들을 만들어야 합니다. 그러나, 이것들은 꽤 쉽습니다.

우리는 어떻게 퍼미션을 만드는지, 그리고 로그인 상태와 퍼미션을 views와 templates에서 어떻게 체크하는지에 대해서도 보여줄 것입니다.

## 인증하도록 하기

Authentication은 우리가 이미 [skeleton website](/ko/docs/Learn/Server-side/Django/skeleton_website) 을 생성했을 때 (in tutorial 2) 자동적으로 생서되었으므로 이 점에서는 할 것이 없습니다..

> **참고:** 설정을 위해 필요한 것들은 모두 django-admin startproject 명령을 이용하여 앱을 생성했을 때 끝났습니다. 사용자들과 모델 퍼미션을 위한 데이터베이스 테이블들은 우리가 처음으로 python manage.py migrate을 실행했을 때 만들어졌습니다.

아래에서 보여주는 것과 같이, 설정은 settings.py파일에서 INSTALLED_APPS과 MIDDLEWARE 부분을 셋업하는 것입니다.

```python
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  #Core authentication framework and its default models.
    'django.contrib.contenttypes',  #Django content type system (allows permissions to be associated with models).
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  #Manages sessions across requests
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  #Associates users with requests using sessions.
    ....
```

## users와 groups 만들기

[Django admin site](/ko/docs/Learn/Server-side/Django/Admin_site)를 tutorial 4에서 봤을 때 이미 당신은 첫번째 유저를 만들었습니다. 이는 슈퍼유저로서 `python manage.py createsuperuser`라는 명령으로 만들었죠. 우리의 슈퍼 유저는 이미 인증이 되어있고 모든 허가 권한을 가지고 있으므로, 우리는 일반적인 사이트 유저를 대표하는 테스트 유저를 만들 것입니다. 우리의 _locallibrary_ groups과 website logins을 위해서 우리는 admin 사이트를 이용할 것인데, 이것이 가장 빠른 방법 중에 하나입니다.

> **참고:** Note: 당신은 아래에서 보여주는 것처럼 프로그램적으로 사용자를 추가할 수 있습니다. 만약에 사용자가 로그인하는 사이트를 개발한다면, 당신은 이것을 해야합니다. (사용자들이 admin site를 접근하게 해서는 안됩니다.)
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'John'
> user.last_name = 'Citizen'
> user.save()
> ```

아래에서 우리는 첫번째 그룹과 그 그룹의 사용자를 만들 것입니다. 아직까지는 우리의 도서관 멤버로서 아무런 퍼미션도 부여하지는 않습니다. 그러나 나중에 필요하다면, 개인들에게 각각 하는 것보다는 그룹에 한번에 하는 것이 휠씬 쉬운 일입니다.

개발서버를 시작하고, 웹브라우저를 통해 admin site(<http://127.0.0.1:8000/admin/>)에 접속하십시오. 그리고 당신의 superuser 계정으로 로그인하십시오. admin site의 최상위 단계에서는 "Django application"에 의해 소트된 당신의 모델들이 있습니다. Authentication and Authorisation 섹션에 있는 Users or Groups 링크를 클릭하여 현재의 등록된 기록들을 볼 수 있습니다.

![Admin site - add groups or users](admin_authentication_add.png)

첫번째로 우리 도서관 멤버를 위한 새 그룹을 만듭시다.

1. Add버튼(Group 다음에 있는)을 클릭하여 새 그룹을 만듭니다; "Library Members"라는 이름을 넣으세요.

![Admin site - add group](admin_authentication_add_group.png)

1. 우리는 그룹을 위한 어떠한 권한도 필요하지 않습니다. 그러므로 **SAVE** 를 누르세요. (you will be taken to a list of groups).

자 이제 사용자(user)를 만들어봅시다 :

1. admin 사이트의 홈페이지로 돌아가주세요.
2. Users 옆 **Add** 버튼을 클릭하여 user dialog를 열어줍니다.![Admin site - add user pt1](admin_authentication_add_user_prt1.png)
3. 당신의 테스트 사용자(user)를 위해 적절한 사용자이름(**Username)** 과 비밀번호(**Password**/**Password confirmation)** 를 입력해주세요.
4. 사용자(user)를 만들기 위해 **SAVE** 를 눌러줍시다.

   관리자 사이트는 새로운 유저를 만들고, **username** 을 바꿀 수 있고 유저모델의 선택 필드에 정보를 추가할 수 있는 _Change user화면으로 즉각 당신에게 보여줄 것입니다. 이 필드들은 이름, 성, 이메일 주소, 유저 상태 및 권한 (오직_ **Active** 표시만 가능합니다)를 포함합니다. 더 밑으로 내려가면 당신의 그룹과 권한 유저와 관련된 중요한 날짜들(예를 들어 가입일과 마지막 로그인 날짜)을 기입할 수 있습니다. ![Admin site - add user pt2](admin_authentication_add_user_prt2.png)

5. 그룹 섹션에서, Available groups목록에서 **Library Member** 를 선택하고두 박스 사이에 있는 **오른쪽 화살표**를 누르면 Chosen groups box로 이동이 될 거에요![Admin site - add user to group](admin_authentication_user_add_group.png)
6. 여기서는 아무것도 필요치 않습니다, 그저 **SAVE** 를 선택하고, 유저 목록으로 가십시오.

다됬습니다! 이제 당신은 테스트를 위해 사용할 수 있는 "normal library member" 계정을 갖게 되었습니다(이들이 로그인할 수 있도록 페이지를 만들 때 말이죠).

> **참고:** 다른 도서관 유저 만들기를 시도해보아야 합니다. 또한 사서들을 위한 그룹을 만들고 유저를 추가해보세요!

## authentication views 세팅하기

Django는 authentication pages에서 login, log out, and password 조정을 위한 거의 모든 것을 제공해 줍니다. "out of the box". 이것은 URL mapper, views와 forms들을 포함하지만 templates은 포함하지 않습니다 — 우리가 만들어야 하죠!

여기서, 우리는 기본 시스템들에 LocalLibrary를 통합하고, template들을 만들 수 있는 지를 볼 거에요.그리고 이것들을 프로젝트 메인 URL들에 넣을 것입니다.

> **참고:** 어떤 코드도 사용하지 않으셔도 되지만, 아마 스스로 원할 가능성이 높아요. 더 쉽게 해주거든요. 만약 user model을 바꾸고자 한다면, form을 다루는 코드를 바꾸게 될 가능성이 아주 높아요. (앞으로 나올 주제에요!) 그렇다고 하더라도, stock view 함수들은 사용할 수 있어야 합니다.

> **참고:**이 경우에, catalog application에 URL과 템플릿을 포함해서 인authentication page들을 넣는게 합리적입니다. 그러나 많은 application들을 가지고 있다면, 공통적으로 로그인 해야하는 것을 분리하고 사이트 전체에서 로그인하는 것을 가능하게끔하는 게 좋을겁니다. 이게 우리가 여기서 볼려고하는 것이죠!

### Project URLs

(**locallibrary/locallibrary/urls.py**) 파일에 다음 코드를 추가해주세요:

```python
#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

이 URL( <http://127.0.0.1:8000/accounts/>)로 접속하세요. URL ('/'의 연결에 주의하세요!) 그러면 장고는 이 URL을 찾을 수 없기 때문에 에러메세지를 보여줄겁니다. 그리고 그 URL들을 어디에서 찾았는지 시도했던 모든 리스트들도 보여줍니다. 이것으로부터 당신은 예를들면, 어떤 URL들이 작동되는지 볼 수 있습니다.

> **참고:**Using the above method adds the following URLs with names in square brackets, which can be used to reverse the URL mappings. You don't have to implement anything else — the above URL mapping automatically maps the below mentioned URLs.

> **참고:**
>
> ```
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

Now try to navigate to the login URL (<http://127.0.0.1:8000/accounts/login/>). This will fail again, but with an error that tells you that we're missing the required template (**registration/login.html**) on the template search path. You'll see the following lines listed in the yellow section up the top:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

The next step is to create a registration directory on the search path and then add the **login.html** file.

### Template directory

The URLs (and implicitly views) that we just added expect to find their associated templates in a directory **/registration/** somewhere in the templates search path.

For this site, we'll put our HTML pages in the **templates/registration/** directory. This directory should be in your project root directory, i.e the same directory as the **catalog** and **locallibrary** folders). Please create these folders now.

> **참고:** Your folder structure should now look like the below:
> locallibrary (Django project folder)
> |\_catalog
> |\_locallibrary
> |\_templates **(new)**
> |\_registration

To make these directories visible to the template loader (i.e. to put this directory in the template search path) open the project settings (**/locallibrary/locallibrary/settings.py**), and update the `TEMPLATES` section's `'DIRS'` line as shown.

```python
TEMPLATES = [
    {
        ...
        'DIRS': ['./templates',],
        'APP_DIRS': True,
        ...
```

### Login template

> **경고:** The authentication templates provided in this article are a very basic/slightly modified version of the Django demonstration login templates. You may need to customise them for your own use!

Create a new HTML file called /**locallibrary/templates/registration/login.html**. give it the following contents:

```django
{% extends "base_generic.html" %}

{% block content %}

{% if form.errors %}
  <p>Your username and password didn't match. Please try again.</p>
{% endif %}

{% if next %}
  {% if user.is_authenticated %}
    <p>Your account doesn't have access to this page. To proceed,
    please login with an account that has access.</p>
  {% else %}
    <p>Please login to see this page.</p>
  {% endif %}
{% endif %}

<form method="post" action="{% url 'login' %}">
  {% csrf_token %}

  <div>
    <td>\{{ form.username.label_tag }}</td>
    <td>\{{ form.username }}</td>
  </div>
  <div>
    <td>\{{ form.password.label_tag }}</td>
    <td>\{{ form.password }}</td>
  </div>

  <div>
    <input type="submit" value="login" />
    <input type="hidden" name="next" value="\{{ next }}" />
  </div>
</form>

{# Assumes you setup the password_reset view in your URLconf #}
<p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

This template shares some similarities with the ones we've seen before — it extends our base template and overrides the `content` block. The rest of the code is fairly standard form handling code, which we will discuss in a later tutorial. All you need to know for now is that this will display a form in which you can enter your username and password and that if you enter invalid values you will be prompted to enter correct values when the page refreshes.

Navigate back to the login page (<http://127.0.0.1:8000/accounts/login/>) once you've saved your template, and you should see something like this:

![Library login page v1](library_login.png)

If you try to log in that will succeed and you'll be redirected to another page (by default this will be <http://127.0.0.1:8000/accounts/profile/>). The problem here is that by default Django expects that after login you will want to be taken to a profile page, which may or may not be the case. As you haven't defined this page yet, you'll get another error!

Open the project settings (**/locallibrary/locallibrary/settings.py**) and add the text below to the bottom. Now when you log in you should be redirected to the site homepage by default.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Logout template

If you navigate to the logout URL (<http://127.0.0.1:8000/accounts/logout/>) then you'll see some odd behaviour — your user will be logged out sure enough, but you'll be taken to the **Admin** logout page. That's not what you want, if only because the login link on that page takes you to the Admin login screen (and that is only available to users who have the `is_staff` permission).

Create and open /**locallibrary/templates/registration/logged_out.html**. Copy in the text below:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

This template is very simple. It just displays a message informing you that you have been logged out, and provides a link that you can press to go back to the login screen. If you go to the logout URL again you should see this page:

![Library logout page v1](library_logout.png)

### Password reset templates

The default password reset system uses email to send the user a reset link. You need to create forms to get the user's email address, send the email, allow them to enter a new password, and to note when the whole process is complete.

The following templates can be used as a starting point.

#### Password reset form

This is the form used to get the user's email address (for sending the password reset email). Create **/locallibrary/templates/registration/password_reset_form.html**, and give it the following contents:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Password reset done

This form is displayed after your email address has been collected. Create **/locallibrary/templates/registration/password_reset_done.html**, and give it the following contents:

```django
{% extends "base_generic.html" %}

{% block content %}
<p>
  We've emailed you instructions for setting your password. If they haven't
  arrived in a few minutes, check your spam folder.
</p>
{% endblock %}
```

#### Password reset email

This template provides the text of the HTML email containing the reset link that we will send to users. Create **/locallibrary/templates/registration/password_reset_email.html**, and give it the following contents:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol}}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Password reset confirm

This page is where you enter your new password after clicking the link in the password reset email. Create **/locallibrary/templates/registration/password_reset_confirm.html**, and give it the following contents:

```django
{% extends "base_generic.html" %}

{% block content %}
  {% if validlink %}
    <p>Please enter (and confirm) your new password.</p>
    <form action="" method="post">
    {% csrf_token %}
      <table>
        <tr>
          <td>\{{ form.new_password1.errors }}
            <label for="id_new_password1">New password:</label></td>
          <td>\{{ form.new_password1 }}</td>
        </tr>
        <tr>
          <td>\{{ form.new_password2.errors }}
            <label for="id_new_password2">Confirm password:</label></td>
          <td>\{{ form.new_password2 }}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Change my password" /></td>
        </tr>
      </table>
    </form>
  {% else %}
    <h1>Password reset failed</h1>
    <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
  {% endif %}
{% endblock %}
```

#### Password reset complete

This is the last password-reset template, which is displayed to notify you when the password reset has succeeded. Create **/locallibrary/templates/registration/password_reset_complete.html**, and give it the following contents:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testing the new authentication pages

Now that you've added the URL configuration and created all these templates, the authentication pages should now just work!

You can test the new authentication pages by attempting to log in and then logout your superuser account using these URLs:

- <http://127.0.0.1:8000/accounts/login/>
- <http://127.0.0.1:8000/accounts/logout/>

You'll be able to test the password reset functionality from the link in the login page. **Be aware that Django will only send reset emails to addresses (users) that are already stored in its database!**

> **참고:** The password reset system requires that your website supports email, which is beyond the scope of this article, so this part **won't work yet**. To allow testing, put the following line at the end of your settings.py file. This logs any emails sent to the console (so you can copy the password reset link from the console).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> For more information, see [Sending email](https://docs.djangoproject.com/en/2.0/topics/email/) (Django docs).

## authenticated users 테스트 하기

This section looks at what we can do to selectively control content the user sees based on whether they are logged in or not.

### Testing in templates

당신은 템플릿에서 `\{{ user }}` 라는 템플릿 변수로 현재 로그인한 사용자에 대한 정보를 얻을 수 있습니다 (이것은 우리의 스켈레톤을 만들때 프로젝트에서 세팅했을 때 템플릿 컨텍스트의 기본 값으로 추가된 것입니다).

보통 처음으로 `\{{ user.is_authenticated }}` 라는 템플릿 변수를 통해서 당신은 사용자가 특정 내용을 볼 수 있는 지여부에 대해서 테스트하게 될 것입니다. 이를 시험하기 위해서, 우리는 사이트바에 로그인와 로그아웃 링크를 업데이트 할 것입니다.

Open the base template (**/locallibrary/catalog/templates/base_generic.html**) and copy the following text into the `sidebar` block, immediately before the `endblock` template tag.

```django
<ul class="sidebar-nav">
  ...

  {% if user.is_authenticated %}
    <li>User: \{{ user.get_username }}</li>
    <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
  {% else %}
    <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
  {% endif %}
</ul>
```

As you can see, we use `if`-`else`-`endif` template tags to conditionally display text based on whether `\{{ user.is_authenticated }}` is true. If the user is authenticated then we know that we have a valid user, so we call **\\{{ user.get_username }}** to display their name.

We create the login and logout link URLs using the `url` template tag and the names of the respective URL configurations. Note also how we have appended `?next=\{{request.path}}` to the end of the URLs. What this does is add a URL parameter next containing the address (URL) of the _current_ page, to the end of the linked URL. After the user has successfully logged in/out, the views will use this "`next`" value to redirect the user back to the page where they first clicked the login/logout link.

> **참고:** Try it out! If you're on the home page and you click Login/Logout in the sidebar, then after the operation completes you should end up back on the same page.

### Testing in views

If you're using function-based views, the easiest way to restrict access to your functions is to apply the `login_required` decorator to your view function, as shown below. If the user is logged in then your view code will execute as normal. If the user is not logged in, this will redirect to the login URL defined in the project settings (`settings.LOGIN_URL`), passing the current absolute path as the `next` URL parameter. If the user succeeds in logging in then they will be returned back to this page, but this time authenticated.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    ...
```

> **참고:** You can do the same sort of thing manually by testing on `request.user.is_authenticated`, but the decorator is much more convenient!

Similarly, the easiest way to restrict access to logged-in users in your class-based views is to derive from `LoginRequiredMixin`. You need to declare this mixin first in the superclass list, before the main view class.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    ...
```

This has exactly the same redirect behaviour as the `login_required` decorator. You can also specify an alternative location to redirect the user to if they are not authenticated (`login_url`), and a URL parameter name instead of "`next`" to insert the current absolute path (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

For additional detail, check out the [Django docs here](https://docs.djangoproject.com/en/2.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Example — listing the current user's books

Now that we know how to restrict a page to a particular user, let's create a view of the books that the current user has borrowed.

Unfortunately, we don't yet have any way for users to borrow books! So before we can create the book list we'll first extend the `BookInstance` model to support the concept of borrowing and use the Django Admin application to loan a number of books to our test user.

### Models

First, we're going to have to make it possible for users to have a `BookInstance` on loan (we already have a `status` and a `due_back` date, but we don't yet have any association between this model and a User. We'll create one using a `ForeignKey` (one-to-many) field. We also need an easy mechanism to test whether a loaned book is overdue.

Open **catalog/models.py**, and import the `User` model from `django.contrib.auth.models` (add this just below the previous import line at the top of the file, so `User` is available to subsequent code that makes use of it):

```python
from django.contrib.auth.models import User
```

Next, add the `borrower` field to the `BookInstance` model:

```python
borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
```

While we're here, let's add a property that we can call from our templates to tell if a particular book instance is overdue. While we could calculate this in the template itself, using a [property](https://docs.python.org/3/library/functions.html#property) as shown below will be much more efficient.

Add this somewhere near the top of the file:

```python
from datetime import date
```

<p class="brush: python">Now add the following property definition to the <code>BookInstance</code> class:</p>

```python
@property
def is_overdue(self):
    if self.due_back and date.today() > self.due_back:
        return True
    return False
```

> **참고:** We first verify whether `due_back` is empty before making a comparison. An empty `due_back` field would cause Django to throw an error instead of showing the page: empty values are not comparable. This is not something we would want our users to experience!

Now that we've updated our models, we'll need to make fresh migrations on the project and then apply those migrations:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Now open **catalog/admin.py**, and add the `borrower` field to the `BookInstanceAdmin` class in both the `list_display` and the `fieldsets` as shown below. This will make the field visible in the Admin section so that we can assign a `User` to a `BookInstance` when needed.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back','borrower')
        }),
    )
```

### Loan a few books

Now that its possible to loan books to a specific user, go and loan out a number of `BookInstance` records. Set their `borrowed` field to your test user, make the `status` "On loan" and set due dates both in the future and the past.

> **참고:** We won't spell the process out, as you already know how to use the Admin site!

### On loan view

Now we'll add a view for getting the list of all books that have been loaned to the current user. We'll use the same generic class-based list view we're familiar with, but this time we'll also import and derive from `LoginRequiredMixin`, so that only a logged in user can call this view. We will also choose to declare a `template_name`, rather than using the default, because we may end up having a few different lists of BookInstance records, with different views and templates.

Add the following to catalog/views.py:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

In order to restrict our query to just the `BookInstance` objects for the current user, we re-implement `get_queryset()` as shown above. Note that "o" is the stored code for "on loan" and we order by the `due_back` date so that the oldest items are displayed first.

### URL conf for on loan books

Now open **/catalog/urls.py** and add a`path()` pointing to the above view (you can just copy the text below to the end of the file).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template for on-loan books

Now, all we need to do for this page is add a template. First, create the template file **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** and give it the following contents:

```python
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">{{bookinst.book.title}}</a> ({{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

This template is very similar to those we've created previously for the `Book` and `Author` objects. The only thing "new" here is that we check the method we added in the model `(bookinst.is_overdue`) and use it to change the colour of overdue items.

When the development server is running, you should now be able to view the list for a logged in user in your browser at <http://127.0.0.1:8000/catalog/mybooks/>. Try this out with your user logged in and logged out (in the second case, you should be redirected to the login page).

### Add the list to the sidebar

The very last step is to add a link for this new page into the sidebar. We'll put this in the same section where we display other information for the logged in user.

Open the base template (**/locallibrary/catalog/templates/base_generic.html**) and add the line in bold to the sidebar as shown.

```python
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: {{ user.get_username }}</li>
   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>
   <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
   {% else %}
   <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
   {% endif %}
 </ul>
```

### What does it look like?

When any user is logged in, they'll see the _My Borrowed_ link in the sidebar, and the list of books displayed as below (the first book has no due date, which is a bug we hope to fix in a later tutorial!).

![Library - borrowed books by user](library_borrowed_by_user.png)

## 허가

Permissions 는 모델과 연관되어 허가를 가진 유저에 의한 model instance 작업들을 정의하게 됩니다. 기본적으로 Django 자동적으로 _add_, _change_, 그리고 _delete_ permissions 을 모든 모델에 제공하는데, 유저가 관리자 사이트를 통해서 (권한)허가를 가지고 연고나도니 작업들을 하게 합니다. 당신은 권한을 모델이나 특정 유저에게 부여하도록 정의할 수 있습니다. You can also change the permissions associated with different instances of the same model.

Testing on permissions in views and templates is then very similar for testing on the authentication status (and in fact, testing for a permission also tests for authentication).

### Models

Defining permissions is done on the model "`class Meta`" section, using the `permissions` field. You can specify as many permissions as you need in a tuple, each permission itself being defined in a nested tuple containing the permission name and permission display value. For example, we might define a permission to allow a user to mark that a book has been returned as shown:

```python
class BookInstance(models.Model):
    ...
    class Meta:
        ...
        permissions = (("can_mark_returned", "Set book as returned"),)
```

We could then assign the permission to a "Librarian" group in the Admin site.

Open the **catalog/models.py**, and add the permission as shown above. You will need to re-run your migrations (call `python3 manage.py makemigrations` and `python3 manage.py migrate`) to update the database appropriately.

### Templates

The current user's permissions are stored in a template variable called `\{{ perms }}`. You can check whether the current user has a particular permission using the specific variable name within the associated Django "app" — e.g. `\{{ perms.catalog.can_mark_returned }}` will be `True` if the user has this permission, and `False` otherwise. We typically test for the permission using the template `{% if %}` tag as shown:

```python
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

Permissions can be tested in function view using the `permission_required` decorator or in a class-based view using the `PermissionRequiredMixin`. The pattern and behaviour are the same as for login authentication, though of course, you might reasonably have to add multiple permissions.

Function view decorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    ...
```

A permission-required mixin for class-based views.

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.can_edit')
    # Note that 'catalog.can_edit' is just an example
    # the catalog application doesn't have such permission!
```

### Example

We won't update the _LocalLibrary_ here; perhaps in the next tutorial!

## Challenge yourself

Earlier in this article, we showed you how to create a page for the current user listing the books that they have borrowed. The challenge now is to create a similar page that is only visible for librarians, that displays _all_ books that have been borrowed, and which includes the name of each borrower.

You should be able to follow the same pattern as for the other view. The main difference is that you'll need to restrict the view to only librarians. You could do this based on whether the user is a staff member (function decorator: `staff_member_required`, template variable: `user.is_staff`) but we recommend that you instead use the `can_mark_returned` permission and `PermissionRequiredMixin`, as described in the previous section.

> **경고:** **Important**: Remember not to use your superuser for permissions based testing (permission checks always return true for superusers, even if a permission has not yet been defined!). Instead, create a librarian user, and add the required capability.

When you are finished, your page should look something like the screenshot below.

![All borrowed books, restricted to librarian](library_borrowed_all.png)

## Summary

Excellent work — you've now created a website that library members can log in into and view their own content and that librarians (with the correct permission) can use to view all loaned books and their borrowers. At the moment we're still just viewing content, but the same principles and techniques are used when you want to start modifying and adding data.

In our next article, we'll look at how you can use Django forms to collect user input, and then start modifying some of our stored data.

## See also

- [User authentication in Django](https://docs.djangoproject.com/en/2.0/topics/auth/) (Django docs)
- [Using the (default) Django authentication system](https://docs.djangoproject.com/en/2.0/topics/auth/default//) (Django docs)
- [Introduction to class-based views > Decorating class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/intro/#decorating-class-based-views) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
