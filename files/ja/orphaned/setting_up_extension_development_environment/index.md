---
title: Setting up extension development environment
slug: orphaned/Setting_up_extension_development_environment
tags:
  - Add-ons
  - Extensions
original_slug: Setting_up_extension_development_environment
---
<p>この記事では、あなたの Mozilla アプリケーションにおいて拡張機能の開発を容易にするためのノウハウを提案します。</p>
<h3 id="Development_preferences">開発用の設定</h3>
<p>これらの設定はパフォーマンスの低下と引き換えにデバッグを簡単にします。</p>
<p>設定を変更するための情報は <a class="external" href="https://www.mozilla.org/support/firefox/edit">設定ファイルの編集</a> を参照して下さい。これらの設定の中にはデフォルトで <code>about:config</code> にリストアップされていないものもあり、新しい (真偽値) エントリを作成しなければならない場合があるので注意して下さい。</p>
<p>これらの変更を行う前に、下記の「開発用のプロファイル」を参考にして別個の開発用プロファイルを作成してください。</p>
<ul>
 <li><b>javascript.options.showInConsole</b> = <b>true</b>。chrome ファイルでのエラーを <a href="ja/Error_Console">エラーコンソール</a> に出力します。</li>
 <li><b>nglayout.debug.disable_xul_cache</b> = <b>true</b>。XUL キャッシュを無効にして、再起動しなくてもウィンドウとダイアログの変更が反映されるようにします。これは <a href="#using_directories_rather_than_jars">JAR ファイルの代わりにディレクトリを使用</a> している事が前提です。この設定が有効であっても、XUL オーバーレイに対する変更を反映させるにはオーバーレイされているドキュメントを再読み込みする必要があります。</li>
 <li><b>browser.dom.window.dump.enabled</b> = <b>true</b>。標準コンソールへの出力をする為の dump() 文の使用を可能にします。詳しくは {{ Domxref("window.dump") }} を参照してください。特権スクリプトからならば <code>nsIConsoleService</code> を使用することも出来ます。</li>
 <li><b>javascript.options.strict</b> = <b>true</b>。エラーコンソールでの厳密な警告を有効にします。開発の際にこの設定を無効にしている人は多いので、あなた自身の拡張機能の警告に加えて彼らのコードによる警告が大量に表示されるようになるでしょうから注意が必要です。<a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/1815">Console<sup>2</sup></a> を使えばそれらをフィルタリングできます。</li>
</ul>
<h3 id="Development_extensions">開発のための拡張機能</h3>
<p>これらの拡張機能はあなたの開発の手助けとなるでしょう。</p>
<ul>
 <li>カスタムインストールで追加できる DOM Inspector</li>
 <li>JavaScript デバッガ <a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/216">Venkman</a></li>
 <li><a class="external" href="https://ted.mielczarek.org/code/mozilla/extensiondev/">Extension Developer's Extension</a></li>
 <li><a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/1815">Console<sup>2</sup></a></li>
 <li><a class="link-https" href="https://addons.mozilla.org/firefox/4453">Chrome List</a></li>
 <li><a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/1843">Firebug</a></li>
 <li><a class="link-https" href="https://addons.mozilla.org/de/firefox/addon/1729">Execute JS</a></li>
 <li><a class="external" href="http://xpcomviewer.mozdev.org">XPCOMViewer</a>, XPCOM インスペクタ</li>
</ul>
<h3 id="Development_profile">開発用のプロファイル</h3>
<p>開発用の設定や開発用の拡張機能によるパフォーマンスの低下や、個人データの漏洩を防ぐためには、開発作業のための別個のプロファイルを作成するのがいいでしょう。</p>
<p><code>-no-remote</code> パラメータを付けて Firefox を起動すると、別々のプロファイルを使った二つの Firefox インスタンスを起動させることが出来ます。例えば、次のコマンドを使うことで、「通常の」 Firefox がすでに起動しているかどうかに関わらず、開発用のプロファイルで Firefox を起動させることが出来ます。 (あなたの開発用プロファイルの名前が "dev" であると仮定しています)</p>
<pre class="eval">start "" "%ProgramFiles%\Mozilla Firefox\firefox.exe" -no-remote -P dev
</pre>
<p>既定のプロファイルで Firefox を起動させるには、通常どおり "firefox" または "firefox -P default" を実行します。</p>
<h3 id="Custom_code_location">コード置き場の変更</h3>
<p>変更を加えるたびに拡張機能を何度も再インストールしたり、アンインストールの際に誤ってソースファイルを削除してしまうのを防ぐために、ソースファイルをプロファイルの外の任意の場所に置く事が出来ます。</p>
<ol>
 <li>拡張機能に含まれる install.rdf から拡張機能の ID を見つける</li>
 <li>プロファイルディレクトリ/extensions/ に、ファイル名をその ID にしたファイルを作成する (例: `your_profile_directory/extensions/{46D1B3C0-DB7A-4b1a-863A-6EE6F77ECB58}`) (<a class="external" href="http://kb.mozillazine.org/Profile_folder" rel="freelink">http://kb.mozillazine.org/Profile_folder</a> プロファイルディレクトリの場所])</li>
 <li>そのファイルの内容に install.rdf ファイルを格納するフォルダへのパスを書き込む (例: `/full/path/to/yourExtension` Windows ユーザはスラッシュではなくバックスラッシュを使ってください。 例: `\full\path\to\yourExtension`)</li>
 <li>ファイルをプロファイルの extensions フォルダに置いて、アプリケーションを再起動する</li>
</ol>
<h3 id="Using_directories_rather_than_JARs">JAR ファイルの代わりにディレクトリを使用</h3>
<p>拡張機能の chrome を JAR ファイルとディレクトリのどちらにパッケージングするかは自由ですが、ディレクトリを使った方が開発は簡単です。リリースする時のために JAR 構造を選んだとしても、chrome.manifest ファイルを編集すればディレクトリ構造で開発することが出来ます。例えばこうなっているのを</p>
<pre class="eval">content	myExtension	jar:chrome/myExtension.jar!/content/
</pre>
<p>こうします。</p>
<pre class="eval">content	myExtension	chrome/content/
</pre>
