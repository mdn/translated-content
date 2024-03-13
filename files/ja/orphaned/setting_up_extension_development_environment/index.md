---
title: Setting up extension development environment
slug: orphaned/Setting_up_extension_development_environment
---

この記事では、あなたの Mozilla アプリケーションにおいて拡張機能の開発を容易にするためのノウハウを提案します。

### 開発用の設定

これらの設定はパフォーマンスの低下と引き換えにデバッグを簡単にします。

設定を変更するための情報は [設定ファイルの編集](https://www.mozilla.org/support/firefox/edit) を参照して下さい。これらの設定の中にはデフォルトで `about:config` にリストアップされていないものもあり、新しい (真偽値) エントリを作成しなければならない場合があるので注意して下さい。

これらの変更を行う前に、下記の「開発用のプロファイル」を参考にして別個の開発用プロファイルを作成してください。

- **javascript.options.showInConsole** = **true**。chrome ファイルでのエラーを [エラーコンソール](/ja/Error_Console) に出力します。
- **nglayout.debug.disable_xul_cache** = **true**。XUL キャッシュを無効にして、再起動しなくてもウィンドウとダイアログの変更が反映されるようにします。これは [JAR ファイルの代わりにディレクトリを使用](#using_directories_rather_than_jars) している事が前提です。この設定が有効であっても、XUL オーバーレイに対する変更を反映させるにはオーバーレイされているドキュメントを再読み込みする必要があります。
- **browser.dom.window\.dump.enabled** = **true**。標準コンソールへの出力をする為の dump() 文の使用を可能にします。詳しくは {{ Domxref("window.dump") }} を参照してください。特権スクリプトからならば `nsIConsoleService` を使用することも出来ます。
- **javascript.options.strict** = **true**。エラーコンソールでの厳密な警告を有効にします。開発の際にこの設定を無効にしている人は多いので、あなた自身の拡張機能の警告に加えて彼らのコードによる警告が大量に表示されるようになるでしょうから注意が必要です。[Console2](https://addons.mozilla.org/en-US/firefox/addon/1815) を使えばそれらをフィルタリングできます。

### 開発のための拡張機能

これらの拡張機能はあなたの開発の手助けとなるでしょう。

- カスタムインストールで追加できる DOM Inspector
- JavaScript デバッガ [Venkman](https://addons.mozilla.org/en-US/firefox/addon/216)
- [Extension Developer's Extension](https://ted.mielczarek.org/code/mozilla/extensiondev/)
- [Console2](https://addons.mozilla.org/en-US/firefox/addon/1815)
- [Chrome List](https://addons.mozilla.org/firefox/4453)
- [Firebug](https://addons.mozilla.org/en-US/firefox/addon/1843)
- [Execute JS](https://addons.mozilla.org/de/firefox/addon/1729)
- [XPCOMViewer](http://xpcomviewer.mozdev.org), XPCOM インスペクタ

### 開発用のプロファイル

開発用の設定や開発用の拡張機能によるパフォーマンスの低下や、個人データの漏洩を防ぐためには、開発作業のための別個のプロファイルを作成するのがいいでしょう。

`-no-remote` パラメータを付けて Firefox を起動すると、別々のプロファイルを使った二つの Firefox インスタンスを起動させることが出来ます。例えば、次のコマンドを使うことで、「通常の」 Firefox がすでに起動しているかどうかに関わらず、開発用のプロファイルで Firefox を起動させることが出来ます。 (あなたの開発用プロファイルの名前が "dev" であると仮定しています)

```
start "" "%ProgramFiles%\Mozilla Firefox\firefox.exe" -no-remote -P dev
```

既定のプロファイルで Firefox を起動させるには、通常どおり "firefox" または "firefox -P default" を実行します。

### コード置き場の変更

変更を加えるたびに拡張機能を何度も再インストールしたり、アンインストールの際に誤ってソースファイルを削除してしまうのを防ぐために、ソースファイルをプロファイルの外の任意の場所に置く事が出来ます。

1. 拡張機能に含まれる install.rdf から拡張機能の ID を見つける
2. プロファイルディレクトリ/extensions/ に、ファイル名をその ID にしたファイルを作成する (例: \`your_profile_directory/extensions/{46D1B3C0-DB7A-4b1a-863A-6EE6F77ECB58}\`) (<http://kb.mozillazine.org/Profile_folder> プロファイルディレクトリの場所])
3. そのファイルの内容に install.rdf ファイルを格納するフォルダへのパスを書き込む (例: \`/full/path/to/yourExtension\` Windows ユーザはスラッシュではなくバックスラッシュを使ってください。 例: \`\full\path\to\yourExtension\`)
4. ファイルをプロファイルの extensions フォルダに置いて、アプリケーションを再起動する

### JAR ファイルの代わりにディレクトリを使用

拡張機能の chrome を JAR ファイルとディレクトリのどちらにパッケージングするかは自由ですが、ディレクトリを使った方が開発は簡単です。リリースする時のために JAR 構造を選んだとしても、chrome.manifest ファイルを編集すればディレクトリ構造で開発することが出来ます。例えばこうなっているのを

```
content myExtension jar:chrome/myExtension.jar!/content/
```

こうします。

```
content myExtension chrome/content/
```
