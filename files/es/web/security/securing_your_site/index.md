---
title: Securing your site
slug: Web/Security/Securing_your_site
tags:
  - HTTP
  - NeedsTranslation
  - Security
  - TopicStub
  - Web Development
translation_of: Web/Security/Securing_your_site
---
Hay varias cosas que puede hacer para ayudar a proteger su sitio. Este artículo ofrece varias sugerencias, así como enlaces a otros artículos que proveen más información útil.

> **Nota:** This article is a work in progress, and is neither complete nor does following its suggestions guarantee your site will be fully secure.

## User information security

- [How to turn off form autocompletion](/en/How_to_Turn_Off_Form_Autocompletion)
  - : Form fields support autocompletion in Gecko; that is, their values can be remembered and automatically brought back the next time the user visits your site. For certain types of data, you may wish to disable this feature.
- [Privacy and the :visited selector](/en/CSS/Privacy_and_the_:visited_selector)
  - : This article discusses changes made to the `getComputedStyle()` method that eliminates the ability for malicious sites to figure out the user's browsing history.
- [Hash passwords using a secure algorithm](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet) (OWASP)
  - : Storing passwords in plain text can lead to attackers knowing and leaking the exact password of your site's users, potentially putting the users at risk. The same issues can arise if you use an old or insecure algorithm for hashing (such as md5). You should use a password-specific hashing algorithm (such as Argon2, PBKDF2, scrypt or bcrypt) instead of message digest algorithms (such as md5 and sha). This article showcases best practices to use when storing passwords.

## Content security

- [Properly configuring server MIME types](/en/Properly_Configuring_Server_MIME_Types)
  - : There are several ways incorrect MIME types can cause potential security problems with your site. This article explains some of those and shows how to configure your server to serve files with the correct MIME types.
- [HTTP Strict Transport Security](/en/Security/HTTP_Strict_Transport_Security)
  - : The `Strict-Transport-Security:` [HTTP](/en/HTTP) header lets a website specify that it may only be accessed using HTTPS.
- [HTTP access control](/En/HTTP_access_control)
  - : The Cross-Origin Resource Sharing standard provides a way to specify what content may be loaded from other domains. You can use this to prevent your site from being used improperly; in addition, you can use it to establish resources that other sites are expressly permitted to use.
- [Content Security Policy](/en/Security/CSP)
  - : An added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware.
- [The X-Frame-Options response header](/es/docs/Web/HTTP/X-Frame-Options)
  - : The `X-Frame-Options:` [HTTP](/en/HTTP) response header can be used to indicate whether or not a browser should be allowed to render a page in a {{ HTMLElement("frame") }}. Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.
- [Securing Your Site using Htaccess](https://wparena.com/how-to-secure-and-protect-wordpress-website-through-htaccess-file/)
  - : Learn the best way and almost all the tricks to secure your site using the .htaccess file. You can blacklist IPs, restrict access to certain areas of website, protect different files, protect against image hotlinking, and a lot more.

## See also

- [Open Web Application Security Project (OWASP)](http://www.owasp.org/)
