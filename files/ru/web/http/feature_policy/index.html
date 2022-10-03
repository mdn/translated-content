---
title: Feature Policy
slug: Web/HTTP/Feature_Policy
translation_of: Web/HTTP/Feature_Policy
---
<div>{{SeeCompatTable}}{{HTTPSidebar}}</div>

<p class="summary">Feature Policy позволяет веб-разработчику выборочно включать, отключать и изменять поведение определённых функций и API в браузере. Это похоже на {{Glossary("CSP", "Content Security Policy")}}, но контролирует функции вместо политик безопасности.</p>

<h2 id="Краткое_описание">Краткое описание</h2>

<p>Заголовок Feature Policy предоставляет механизм для ясного указания функций, используемых или не используемых вашим веб-сайтом. Это позволяет закрепить лучшие практики, даже если кодовая база развивается с течением времени, а также более безопасно включать сторонний контент, ограничивая доступные функции.</p>

<p>С помощью заголовка Feature Policy вы можете включить набор "политик" для браузера, чтобы использовать определённые функции, необходимые веб-сайту. Эти политики определяют какие API сайта могут получать доступ или изменять поведение по умолчанию для определённых функций.</p>

<p>Примеры того, что можно сделать с заголовком Feature Policy:</p>

<ul>
 <li>Изменить поведение автозапуска видео на мобильных устройствах.</li>
 <li>Ограничить доступ сайта к камере и микрофону.</li>
 <li>Разрешить использование API полноэкранного режима в iframe.</li>
 <li>Блокировать использование устаревших API, например <a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">synchronous XHR</a> and {{domxref("document.write()")}}.</li>
 <li>Проверять соответствие размера изображений размерам области просмотра.</li>
</ul>

<h2 id="Concepts_and_usage">Concepts and usage</h2>

<p>Feature Policy allows you to control which origins can use which features, both in the top-level page and in embedded frames. Essentially, you write a policy, which is an allowed list of origins for each feature. For every feature controlled by Feature Policy, the feature is only enabled in the current document or frame if its origin matches the allowed list of origins.</p>

<p>For each policy-controlled feature, the browser maintains a list of origins for which the feature is enabled, known as an allowlist. If you do not specify a policy for a feature, then a default allowlist will be used. The default allowlist is specific to each feature.</p>

<h3 id="Writing_a_policy">Writing a policy</h3>

<p>A policy is described using a set of individual policy directives. A policy directive is a combination of a defined feature name, and an allowlist of origins that can use the feature.</p>

<h3 id="Specifying_your_policy">Specifying your policy</h3>

<p>Feature Policy provides two ways to specify policies to control features:</p>

<ul>
 <li>The {{httpheader('Feature-Policy')}} HTTP header.</li>
 <li>The {{HTMLElement('iframe','<code>allow</code>','#Attributes')}} attribute on iframes.</li>
</ul>

<p>The primary difference between the HTTP header and the <code>allow</code> attribute is that the allow attribute only controls features within an iframe. The header controls features in the response and any embedded content within the page.</p>

<p>For more details see <a href="/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">Using Feature Policy</a>.</p>

<h2 id="Types_of_policy-controlled_features">Types of policy-controlled features</h2>

<p>Though Feature Policy provides control of multiple features using a consistent syntax, the behavior of policy controlled features varies and depends on several factors.</p>

<p>The general principle is that there should be an intuitive or non-breaking way for web developers to detect or handle the case when the feature is disabled. Newly introduced features may have an explicit API to signal the state. Existing features that later integrate with Feature Policy will typically use existing mechanisms. Some approaches include:</p>

<ul>
 <li>Return "permission denied" for JavaScript APIs that require user permission grants.</li>
 <li>Return <code>false</code> or error from an existing JavaScript API that provides access to feature.</li>
 <li>Change the default values or options that control the feature behavior.</li>
</ul>

<p>The current set of policy-controlled features fall into two broad categories:</p>

<ul>
 <li>Enforcing best practices for good user experiences.</li>
 <li>Providing granular control over sensitive or powerful features.</li>
</ul>

<h3 id="Best_practices_for_good_user_experiences">Best practices for good user experiences</h3>

<p>There are several policy-controlled features to help enforce best practices for providing good performance and user experiences.</p>

<p>In most cases, the policy-controlled features represent functionality that when used will negatively impact the user experience. To avoid breaking existing web content, the default for such policy-controlled features is to allow the functionality to be used by all origins. Best practices are then enforced by using policies that disable the policy-controlled features. For more details see "Enforcing best practices for good user experiences".</p>

<p>The features include:</p>

<ul>
 <li>Layout-inducing animations</li>
 <li>Legacy image formats</li>
 <li>Oversized images</li>
 <li>Synchronous scripts</li>
 <li>Synchronous XMLHTTPRequest</li>
 <li>Unoptimized images</li>
 <li>Unsized media</li>
</ul>

<h3 id="Granular_control_over_certain_features">Granular control over certain features</h3>

<p>The web provides functionality and APIs that may have privacy or security risks if abused. In some cases, you may wish to strictly limit how such functionality is used on a website. There are policy-controlled features to allow functionality to be enabled/disabled for specific origins or frames within a website. Where available, the feature integrates with the Permissions API, or feature-specific mechanisms to check if the feature is available.</p>

<p>The features include:</p>

<ul>
 <li>Accelerometer</li>
 <li>Ambient light sensor</li>
 <li>Autoplay</li>
 <li>Camera</li>
 <li>Encrypted media</li>
 <li>Fullscreen</li>
 <li>Geolocation</li>
 <li>Gyroscope</li>
 <li>Lazyload</li>
 <li>Microphone</li>
 <li>Midi</li>
 <li>PaymentRequest</li>
 <li>Picture-in-picture</li>
 <li>Speaker</li>
 <li>USB</li>
 <li>VR / XR</li>
</ul>

<h2 id="Examples">Examples</h2>

<ul>
 <li>See <a href="http://feature-policy-demos.appspot.com/">Feature Policy Demos</a> for example usage of many policies.</li>
</ul>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Feature Policy','#feature-policy-http-header-field','Feature-Policy')}}</td>
   <td>{{Spec2('Feature Policy')}}</td>
   <td>Initial definition. Defines the {{httpheader('Feature-Policy')}} header. Directives are defined in the specs for the features they control. See individual directive pages for details.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("http.headers.Feature-Policy")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">Using Feature Policy</a></li>
 <li>{{HTTPHeader("Feature-Policy")}} HTTP header</li>
 <li>{{HTMLElement('iframe','<code>allow</code>','#Attributes')}} attribute on iframes</li>
 <li><a href="https://developers.google.com/web/updates/2018/06/feature-policy">Introduction to Feature Policy</a></li>
 <li><a href="https://www.chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy">Feature policies on www.chromestatus.com</a></li>
 <li><a href="https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop">Feature-Policy Tester (Chrome Developer Tools extension)</a></li>
</ul>
