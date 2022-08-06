---
title: Tips and Tricks
slug: Mozilla/Add-ons/WebExtensions/Tips
translation_of: Mozilla/Add-ons/WebExtensions/Tips
---
<p>{{AddonSidebar}}</p>

<p>このページには開発者がWebExtensionsを開発するのに便利ないろいろなコツや技術が書かれています。</p>

<h2 id="Using_advanced_JavaScript_features_from_ECMAScript_6_and_7">Using advanced JavaScript features from ECMAScript 6 and 7</h2>

<p>Firefoxは<a href="/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla">たくさんの独創的なECMAScript6</a>の特徴を含んでいます。いくつかの新しい、そして実験的な特徴は、デフォルトではWebやWebExtensionでは使用できません。もしあなたがこれらの機能を使いたい場合、<a href="https://babeljs.io/">Babel</a>のようなトランスパイラを使用するのがベストでしょう。</p>

<p>Babelは大半のES6の特徴に対するtransformationsを提供します </p>

<p>provides transformations for the vast majority of ES6 features, and enables them by default.</p>

<p>Since Firefox already fully supports most of these, it's best to configure Babel to ignore them.</p>

<p>私達は.babelrcファイルの作成やあなたのpackage.jsonのbabelセクションに以下の設定を含めることを提案します。</p>

<pre class="brush: js">{
  "env": {
    "firefox": {
      "sourceMaps": "inline",
      "blacklist": [
        "es5.properties.mutators",
        "es6.arrowFunctions",
        "es6.destructuring",
        "es6.forOf",
        "es6.parameters",
        "es6.properties.computed",
        "es6.properties.shorthand",
        "es6.spec.symbols",
        "es6.spread",
        "es6.tailCall",
        "es6.templateLiterals",
        "es6.regex.sticky",
        "es6.regex.unicode"
      ]
    }
  }
}
</pre>

<p>Then, to compile an individual script, simply run:</p>

<pre class="brush: sh">BABEL_ENV=firefox babel &lt;filename&gt;
</pre>

<p>Or, to compile every JavaScript file under the directory <code>src</code> and place the compiled files in <code>compiled</code>, copying over non-JavaScript files in the process, run:</p>

<pre class="brush: sh">BABEL_ENV=firefox babel -Dd compiled src
</pre>
