---
title: Web ページから拡張機能とテーマをインストールする
slug: orphaned/Installing_Extensions_and_Themes_From_Web_Pages
tags:
  - Add-ons
  - Extensions
  - Themes
original_slug: Installing_Extensions_and_Themes_From_Web_Pages
---
<p> </p>
<p><a href="ja/Extension">拡張機能</a> と <a href="ja/Themes">テーマ</a> を Web ページからインストールするには、XPI ファイルに直接リンクしたり、<a href="ja/XPInstall_API_Reference/InstallTrigger_Object">InstallTrigger</a> オブジェクトを使用するなど様々な方法があります。</p>
<p>拡張機能と Web ページの作者はユーザに対して最高の経験を提供するように、以下にかかれた方法で XPI をインストールできるようにすることを奨励します。</p>
<h3 id="Web_.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.88.E3.81.AE.E4.BE.8B" name="Web_.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.88.E3.81.AE.E4.BE.8B">Web スクリプトの例</h3>
<pre class="eval">&lt;script type="application/x-javascript"&gt;
&lt;!--
function install (aEvent)
{
  var params = {
    "Foo": { URL: aEvent.target.href,
             IconURL: aEvent.target.getAttribute("iconURL"),
             Hash: aEvent.target.getAttribute("hash"),
             toString: function () { return this.URL; }
    }
  };
  InstallTrigger.install(params);

  return false;
}
--&gt;
&lt;/script&gt;

&lt;a href="<a class="external" href="http://www.example.com/foo.xpi" rel="freelink">http://www.example.com/foo.xpi</a>"
  iconURL="<a class="external" href="http://www.example.com/foo.png" rel="freelink">http://www.example.com/foo.png</a>"
  hash="sha1:28857e60d043447c5f4550853f2d40770b326a13"
  onclick="return install(event);"&gt;拡張機能をインストール!&lt;/a&gt;
</pre>
<p>それでは、一つずつ見ていきましょう。HTML の &lt;a&gt; タグはインストールリンクです。href 属性は拡張機能の XPI ファイルへ直接リンクしており、リンクをマウスでポイントしたときにリンク先がロケーションバーに表示されます。ユーザは、リンクを右クリックして "名前を付けてリンク先を保存..." を選び、簡単に XPI ファイルを保存することができます。</p>
<p>リンクがクリックされると <code>install</code> 関数が呼び出され、パラメータがイベントオブジェクトに渡されます。</p>
<p>install 関数は、はじめにパラメータブロックを作成します:</p>
<pre class="eval">var params = {
  "Foo": { URL: aEvent.target.href,
           IconURL: aEvent.target.getAttribute("iconURL"),
           Hash: aEvent.target.getAttribute("hash"),
           toString: function () { return this.URL; }
};
</pre>
<p>これは、確認ダイアログで使用するディスプレイ名(Foo) および拡張機能への URL(<code>href</code> で再び呼び出されるリンク)、確認ダイアログで表示するためのアイコンへの URL(IconURL)、xpi ファイルコンテンツの(改変されたダウンロードを防ぐための)ハッシュ、このコードを Firefox 0.8 以前で動作させるための <code>toString</code> 関数を指定しています。また、確認ダイアログで使用するアイコンが無いときなど、古いスタイルのパラメータブロック(<code>{ "Foo": aEvent.target.href }</code>) を使用することもできます。</p>
<p><code>InstallTrigger.install</code> は拡張機能をインストールするときにパラメータブロックと共に呼び出されます。</p>
<pre class="eval">return false;
</pre>
<p>この最後の部分は最も重要です。リンクをクリックしてスクリプトが実行されリンク先が見つからないとき、install 関数は <code>false</code> を返さなくてはなりません。この手順を省略した場合、ユーザは二つのインストールダイアログを見ることになります。実際、インストールを二度要求されます)。一つは <code>InstallTrigger</code> によって、もう一つはXPI ファイルを直接読み込もうとすることによってです。</p>
<h3 id=".E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB.E3.82.AA.E3.83.96.E3.82.B8.E3.82.A7.E3.82.AF.E3.83.88.E3.81.AB.E5.88.A9.E7.94.A8.E5.8F.AF.E8.83.BD.E3.81.AA.E3.83.91.E3.83.A9.E3.83.A1.E3.83.BC.E3.82.BF" name=".E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB.E3.82.AA.E3.83.96.E3.82.B8.E3.82.A7.E3.82.AF.E3.83.88.E3.81.AB.E5.88.A9.E7.94.A8.E5.8F.AF.E8.83.BD.E3.81.AA.E3.83.91.E3.83.A9.E3.83.A1.E3.83.BC.E3.82.BF">インストールオブジェクトに利用可能なパラメータ</h3>
<p><code>InstallTrigger.install</code> メソッドは、オブジェクトのインストール時に使用される、いくつかのプロパティを持つ JavaScript オブジェクトをパラメータとして受け入れます。</p>
<h4 id="URL" name="URL">URL</h4>
<p><code>URL</code> プロパティは、インストールする XPI ファイルの URL を指定します。このプロパティは必須です。</p>
<h4 id="IconURL" name="IconURL">IconURL</h4>
<p><code>IconURL</code> プロパティは、インストールダイアログ内に表示されるアイコンを指定します。このプロパティは任意です。アイコンを指定ない場合は、デフォルトのアイコン(普通は緑色のパズルピース) が使用されます。アイコンは Firefox でサポートされた画像形式で、32×32 ピクセルの大きさにします。</p>
<h4 id="Hash" name="Hash">Hash</h4>
<p><code>Hash</code> プロパティは XPI ファイルコンテンツのハッシュ値を指定します。これはダウンロードしたファイルを検証し、例えば、ミラーサーバによって改変されたファイルが供給されるのを防ぐために使用されます。<a href="ja/NsICryptoHash">nsICryptoHash</a> によってサポートされた任意のハッシュ関数を使用することができます。ハッシュ値は <code>hash function:hash value</code> の書式で、例えば、<code>sha1:28857e60d043447c5f4550853f2d40770b326a13</code> のように指定します。</p>
<h4 id="toString.28.29" name="toString.28.29">toString()</h4>
<p><code>toString()</code> プロパティは、Firefox 1.0 よりも古いバージョンとの互換性のため、またSeamonkey などの他のアプリケーションのために、XPI ファイルの URL を返すべきです。</p>
<h3 id=".E3.83.86.E3.83.BC.E3.83.9E" name=".E3.83.86.E3.83.BC.E3.83.9E">テーマ</h3>
<p>テーマの適用については、<code>installChrome</code> 関数の使用を除き、ほとんどすべてのことを書きました。多くのサイトは拡張機能のインストールを、XPI ファイルに直接リンクしてインストールの確認 UI を表示する方法に頼っており、また多くのサイトがテーマの JAR ファイルも同様の (正しくない) 方法でインストールしようとするため、なぜ自動的に検出されインストールされないのか不思議に思っています。XPI ファイルは Mozilla 仕様の拡張なので特別にそれを扱うことができますが、JAR ファイルはそうではありません。すべての .jar ファイルが Firefox のテーマではないため、.jar ファイルへのリンクをクリックしても、名前を付けて保存ダイアログが表示されるだけです。そういうわけで、テーマのインストールにはいつも <code>InstallTrigger</code> API を使用しなければなりません。</p>
<h3 id="updateEnabled.28.29_.E3.81.AB.E3.81.A4.E3.81.84.E3.81.A6.E3.81.AE.E6.B3.A8.E6.84.8F" name="updateEnabled.28.29_.E3.81.AB.E3.81.A4.E3.81.84.E3.81.A6.E3.81.AE.E6.B3.A8.E6.84.8F">updateEnabled() についての注意</h3>
<p><code>InstallTrigger</code> は、<code>InstallTrigger.install</code> を呼び出す前に <code>updateEnabled</code> 関数を呼び出します。これは <code>updateEnabled</code> 自身が内部で呼び出されるため、インストールには必要ありません。さらに、あなたの配布サイトがユーザのホワイトリストに無い場合、 <code>updateEnabled</code> を呼び出すことによって問題を起こすかもしれません。Firefox はインストール時や <code>installChrome</code> が呼び出されたとき、XPI ファイルが読み込まれたときに "インストール拒否" メッセージだけを表示します。次のようなコードが含まれ、あなたのサイトがホワイトリストに無い場合:</p>
<pre class="eval">if (InstallTrigger.updateEnabled())
  InstallTrigger.install({"Foo": "foo.xpi"});
</pre>
<p>ユーザがこのコードを呼び出すと、<code>updateEnabled</code> は <code>false</code> を返します。<code>updateEnabled</code> はあなたのサイトがホワイトリストに無いことを見つけ、ユーザに何の通知もせず、インストールを呼び出しません。</p>
<p>従って <code>updateEnabled</code> は、ソフトウェアのインストールが無効になっていること、またはあなたのサイトがホワイトリストに無いことを知らせる内容をページに表示するためだけに使用するべきです。また、ホワイトリストのインストールコードパスにはあなたのサイトを含めないでください。</p>
<p>(* ぜひとも、より大掛かりなインストールシステムの開発を止めようとはしないでください。私は、より多くの拡張機能の配布者が様々なケースでこれらを扱うことができるようにするためのガイドとして、このドキュメントを提供しています。)</p>
