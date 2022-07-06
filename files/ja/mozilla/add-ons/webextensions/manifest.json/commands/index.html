---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/commands
---
<div>{{AddonSidebar}}</div>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>Object</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json no-line-numbers">
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre>
   </td>
  </tr>
 </tbody>
</table>

<p><code>commands</code> キーを使うと拡張機能用のキーボードショートカットを定義できます。</p>

<p>それぞれのショートカットは名前、キーの組み合わせ、説明で定義されます。manifest.json で command を定義すると、関連したキーの組み合わせを {{WebExtAPIRef("commands")}} JavaScript API を用いてリッスンできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>commands</code> キーはオブジェクトで、それぞれのショートカットはそのプロパティです。プロパティ名はショートカットの名前です。</p>

<p>それぞれのショートカット自身がオブジェクトで、最大2 つのプロパティを持ちます:</p>

<ul>
 <li><code>suggested_key</code>: これはキーの組み合わせを定義します</li>
 <li><code>description</code>: このショートカットを説明する文字</li>
</ul>

<p><code>suggested_key</code> プロパティ自身がオブジェクトで、次のプロパティ(これがすべてです)のいくつかを持ちます:</p>

<ul>
 <li><code>"default"</code>, <code>"mac"</code>, <code>"linux"</code>, <code>"windows"</code>, <code>"chromeos"</code>, <code>"android"</code>, <code>"ios"</code></li>
</ul>

<p>それぞれのプロパティの値はそのプラットフォーム用のキーボードショートカットで、"+" で分割されたキーの文字列で与えられます。<code>"default"</code> 用の値が明示的に載っていないすべてのプラットフォームで使われます。</p>

<p>例えば:</p>

<pre class="brush: json no-line-numbers">"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event to the extension"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}</pre>

<p>これは 2 つのショートカットを定義します:</p>

<ul>
 <li>1 つは "toggle-feature" という名前で、Linux では <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>U</kbd> 、その他のプラットフォームでは <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>U</kbd> でアクセスされます。</li>
 <li>1 つは "do-another-thing" という名前で、すべてのプラットフォームで <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd> でアクセスされます。</li>
</ul>

<p>次に、これらのコマンドの最初を下記のようにリッスンできます:</p>

<pre class="brush: js no-line-numbers">browser.commands.onCommand.addListener(function(command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});</pre>

<h3 id="Special_shortcuts" name="Special_shortcuts">特殊なショートカット</h3>

<p>特殊なショートカットが 3 つあります:</p>

<ul>
 <li>_execute_browser_action: 拡張機能の<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_action">ブラウザーアクション</a>のクリックのように動作します。</li>
 <li>_execute_page_action: 拡張機能の<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Page_actions">ページアクション</a>のクリックのように動作します。</li>
 <li>_execute_sidebar_action: 拡張機能の<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Sidebars">サイドバー</a>を開きます。Firefox のバージョン 54 以降のみでサポートされます。</li>
</ul>

<p>例えば、これはブラウザーアクションをクリックするキーの組み合わせを定義します:</p>

<pre class="brush: js no-line-numbers">"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}</pre>

<h2 id="Shortcut_values" name="Shortcut_values">ショートカットの値</h2>

<p>ショートカットキーには２つのフォーマットがあります: キーの組み合わせとメディアキーです。</p>

<h3 id="Key_combinations" name="Key_combinations">キーの組み合わせ</h3>

<div class="pull-aside">
<div class="moreinfo">Mac では、"Ctrl" は"Command" と翻訳され、実際の "Ctrl"が必要ならば "MacCtrl"と指定します。</div>
</div>

<p>キーの組み合わせは 2 つか 3 つのキーからなります:</p>

<ul>
 <li><strong>modifier</strong> (ファンクションキー以外では必須)。これは次のいずれかです: "Ctrl", "Alt", "Command", "MacCtrl".</li>
 <li><strong>secondary modifier</strong> (オプション)。指定する場合は"Shift"でなければなりません。</li>
 <li><strong>key</strong> (必須)。これは次のいずれかです:
  <ul>
   <li>A-Z の範囲の文字</li>
   <li>0-9 の範囲の数字</li>
   <li>ファンクションキー F1-F12</li>
   <li>カンマ, ピリオド, Home, End, PageUp, PageDown, スペース, Insert, Delete, 上矢印, 下矢印, 左矢印, 右矢印</li>
  </ul>
 </li>
</ul>

<p>キーは、上記のリストの順に、"+" で区切られたキー値の組み合わせで与えられます: 例えば、 "Ctrl+Shift+Z".</p>

<p>キーの組み合わせがブラウザーや(例えば "Ctrl+P")、既存のアドオンですでに使われている場合、それを上書きできます。定義することもできますが、ユーザーが入力してもイベントハンドラーは呼ばれません。</p>

<h3 id="Media_keys" name="Media_keys">メディアキー</h3>

<p>あるいは、ショートカットキーは次のいずれかでも指定できます:</p>

<ul>
 <li>"MediaNextTrack", "MediaPlayPause", "MediaPrevTrack", "MediaStop"</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<p>既定値だけを使って単一のショートカットを定義するには:</p>

<pre class="brush: json no-line-numbers">"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre>

<p>２つのショートカットを定義し、１つはプラットフォーム固有のキーの組み合わせとするには:</p>

<pre class="brush: json no-line-numbers">"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.commands")}}</p>
