---
title: Web ページから拡張機能とテーマをインストールする
slug: orphaned/Installing_Extensions_and_Themes_From_Web_Pages
---

[拡張機能](/ja/Extension) と [テーマ](/ja/Themes) を Web ページからインストールするには、XPI ファイルに直接リンクしたり、[InstallTrigger](/ja/XPInstall_API_Reference/InstallTrigger_Object) オブジェクトを使用するなど様々な方法があります。

拡張機能と Web ページの作者はユーザに対して最高の経験を提供するように、以下にかかれた方法で XPI をインストールできるようにすることを奨励します。

### Web スクリプトの例

```
<script type="application/x-javascript">
<!--
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
-->
</script>

<a href="http://www.example.com/foo.xpi"
  iconURL="http://www.example.com/foo.png"
  hash="sha1:28857e60d043447c5f4550853f2d40770b326a13"
  onclick="return install(event);">拡張機能をインストール!</a>
```

それでは、一つずつ見ていきましょう。HTML の \<a> タグはインストールリンクです。href 属性は拡張機能の XPI ファイルへ直接リンクしており、リンクをマウスでポイントしたときにリンク先がロケーションバーに表示されます。ユーザは、リンクを右クリックして "名前を付けてリンク先を保存..." を選び、簡単に XPI ファイルを保存することができます。

リンクがクリックされると `install` 関数が呼び出され、パラメータがイベントオブジェクトに渡されます。

install 関数は、はじめにパラメータブロックを作成します:

```
var params = {
  "Foo": { URL: aEvent.target.href,
           IconURL: aEvent.target.getAttribute("iconURL"),
           Hash: aEvent.target.getAttribute("hash"),
           toString: function () { return this.URL; }
};
```

これは、確認ダイアログで使用するディスプレイ名(Foo) および拡張機能への URL(`href` で再び呼び出されるリンク)、確認ダイアログで表示するためのアイコンへの URL(IconURL)、xpi ファイルコンテンツの(改変されたダウンロードを防ぐための)ハッシュ、このコードを Firefox 0.8 以前で動作させるための `toString` 関数を指定しています。また、確認ダイアログで使用するアイコンが無いときなど、古いスタイルのパラメータブロック(`{ "Foo": aEvent.target.href }`) を使用することもできます。

`InstallTrigger.install` は拡張機能をインストールするときにパラメータブロックと共に呼び出されます。

```
return false;
```

この最後の部分は最も重要です。リンクをクリックしてスクリプトが実行されリンク先が見つからないとき、install 関数は `false` を返さなくてはなりません。この手順を省略した場合、ユーザは二つのインストールダイアログを見ることになります。実際、インストールを二度要求されます)。一つは `InstallTrigger` によって、もう一つは XPI ファイルを直接読み込もうとすることによってです。

### インストールオブジェクトに利用可能なパラメータ

`InstallTrigger.install` メソッドは、オブジェクトのインストール時に使用される、いくつかのプロパティを持つ JavaScript オブジェクトをパラメータとして受け入れます。

#### URL

`URL` プロパティは、インストールする XPI ファイルの URL を指定します。このプロパティは必須です。

#### IconURL

`IconURL` プロパティは、インストールダイアログ内に表示されるアイコンを指定します。このプロパティは任意です。アイコンを指定ない場合は、デフォルトのアイコン(普通は緑色のパズルピース) が使用されます。アイコンは Firefox でサポートされた画像形式で、32×32 ピクセルの大きさにします。

#### Hash

`Hash` プロパティは XPI ファイルコンテンツのハッシュ値を指定します。これはダウンロードしたファイルを検証し、例えば、ミラーサーバによって改変されたファイルが供給されるのを防ぐために使用されます。[nsICryptoHash](/ja/NsICryptoHash) によってサポートされた任意のハッシュ関数を使用することができます。ハッシュ値は `hash function:hash value` の書式で、例えば、`sha1:28857e60d043447c5f4550853f2d40770b326a13` のように指定します。

#### toString()

`toString()` プロパティは、Firefox 1.0 よりも古いバージョンとの互換性のため、また Seamonkey などの他のアプリケーションのために、XPI ファイルの URL を返すべきです。

### テーマ

テーマの適用については、`installChrome` 関数の使用を除き、ほとんどすべてのことを書きました。多くのサイトは拡張機能のインストールを、XPI ファイルに直接リンクしてインストールの確認 UI を表示する方法に頼っており、また多くのサイトがテーマの JAR ファイルも同様の (正しくない) 方法でインストールしようとするため、なぜ自動的に検出されインストールされないのか不思議に思っています。XPI ファイルは Mozilla 仕様の拡張なので特別にそれを扱うことができますが、JAR ファイルはそうではありません。すべての .jar ファイルが Firefox のテーマではないため、.jar ファイルへのリンクをクリックしても、名前を付けて保存ダイアログが表示されるだけです。そういうわけで、テーマのインストールにはいつも `InstallTrigger` API を使用しなければなりません。

### updateEnabled() についての注意

`InstallTrigger` は、`InstallTrigger.install` を呼び出す前に `updateEnabled` 関数を呼び出します。これは `updateEnabled` 自身が内部で呼び出されるため、インストールには必要ありません。さらに、あなたの配布サイトがユーザのホワイトリストに無い場合、 `updateEnabled` を呼び出すことによって問題を起こすかもしれません。Firefox はインストール時や `installChrome` が呼び出されたとき、XPI ファイルが読み込まれたときに "インストール拒否" メッセージだけを表示します。次のようなコードが含まれ、あなたのサイトがホワイトリストに無い場合:

```
if (InstallTrigger.updateEnabled())
  InstallTrigger.install({"Foo": "foo.xpi"});
```

ユーザがこのコードを呼び出すと、`updateEnabled` は `false` を返します。`updateEnabled` はあなたのサイトがホワイトリストに無いことを見つけ、ユーザに何の通知もせず、インストールを呼び出しません。

従って `updateEnabled` は、ソフトウェアのインストールが無効になっていること、またはあなたのサイトがホワイトリストに無いことを知らせる内容をページに表示するためだけに使用するべきです。また、ホワイトリストのインストールコードパスにはあなたのサイトを含めないでください。

(\* ぜひとも、より大掛かりなインストールシステムの開発を止めようとはしないでください。私は、より多くの拡張機能の配布者が様々なケースでこれらを扱うことができるようにするためのガイドとして、このドキュメントを提供しています。)
