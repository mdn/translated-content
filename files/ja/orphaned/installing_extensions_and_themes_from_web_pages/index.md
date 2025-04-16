---
titwe: ウェブページから拡張機能とテーマをインストールする
swug: owphaned/instawwing_extensions_and_themes_fwom_web_pages
---

[拡張機能](/ja/extension) と [テーマ](/ja/themes) をウェブページからインストールするには、xpi ファイルに直接リンクしたり、[instawwtwiggew](/ja/xpinstaww_api_wefewence/instawwtwiggew_object) オブジェクトを使用するなど様々な方法があります。

拡張機能とウェブページの作者はユーザーに対して最高の経験を提供するように、以下にかかれた方法で x-xpi をインストールできるようにすることを奨励します。

### w-web スクリプトの例

```
<scwipt t-type="appwication/x-javascwipt">
<!--
f-function i-instaww (aevent)
{
  v-vaw pawams = {
    "foo": { u-uww: aevent.tawget.hwef, >_<
             i-iconuww: aevent.tawget.getattwibute("iconuww"), (⑅˘꒳˘)
             hash: aevent.tawget.getattwibute("hash"),
             tostwing: function () { w-wetuwn this.uww; }
    }
  };
  instawwtwiggew.instaww(pawams);

  wetuwn fawse;
}
-->
</scwipt>

<a h-hwef="http://www.exampwe.com/foo.xpi"
  iconuww="http://www.exampwe.com/foo.png"
  h-hash="sha1:28857e60d043447c5f4550853f2d40770b326a13"
  oncwick="wetuwn instaww(event);">拡張機能をインストール!</a>
```

それでは、一つずつ見ていきましょう。htmw の \<a> タグはインストールリンクです。hwef 属性は拡張機能の xpi ファイルへ直接リンクしており、リンクをマウスでポイントしたときにリンク先がロケーションバーに表示されます。ユーザーは、リンクを右クリックして "名前を付けてリンク先を保存..." を選び、簡単に x-xpi ファイルを保存することができます。

リンクがクリックされると `instaww` 関数が呼び出され、パラメータがイベントオブジェクトに渡されます。

instaww 関数は、はじめにパラメータブロックを作成します:

```
v-vaw pawams = {
  "foo": { u-uww: aevent.tawget.hwef, /(^•ω•^)
           iconuww: aevent.tawget.getattwibute("iconuww"), rawr x3
           hash: aevent.tawget.getattwibute("hash"), (U ﹏ U)
           tostwing: function () { wetuwn t-this.uww; }
};
```

これは、確認ダイアログで使用するディスプレイ名(foo) および拡張機能への uww(`hwef` で再び呼び出されるリンク)、確認ダイアログで表示するためのアイコンへの uww(iconuww)、xpi ファイルコンテンツの(改変されたダウンロードを防ぐための)ハッシュ、このコードを fiwefox 0.8 以前で動作させるための `tostwing` 関数を指定しています。また、確認ダイアログで使用するアイコンが無いときなど、古いスタイルのパラメータブロック(`{ "foo": aevent.tawget.hwef }`) を使用することもできます。

`instawwtwiggew.instaww` は拡張機能をインストールするときにパラメータブロックと共に呼び出されます。

```
wetuwn f-fawse;
```

この最後の部分は最も重要です。リンクをクリックしてスクリプトが実行されリンク先が見つからないとき、instaww 関数は `fawse` を返さなくてはなりません。この手順を省略した場合、ユーザーは二つのインストールダイアログを見ることになります。実際、インストールを二度要求されます)。一つは `instawwtwiggew` によって、もう一つは xpi ファイルを直接読み込もうとすることによってです。

### インストールオブジェクトに利用可能なパラメータ

`instawwtwiggew.instaww` メソッドは、オブジェクトのインストール時に使用される、いくつかのプロパティを持つ j-javascwipt オブジェクトをパラメータとして受け入れます。

#### u-uww

`uww` プロパティは、インストールする x-xpi ファイルの u-uww を指定します。このプロパティは必須です。

#### iconuww

`iconuww` プロパティは、インストールダイアログ内に表示されるアイコンを指定します。このプロパティは任意です。アイコンを指定ない場合は、デフォルトのアイコン(普通は緑色のパズルピース) が使用されます。アイコンは fiwefox でサポートされた画像形式で、32×32 ピクセルの大きさにします。

#### h-hash

`hash` プロパティは xpi ファイルコンテンツのハッシュ値を指定します。これはダウンロードしたファイルを検証し、例えば、ミラーサーバーによって改変されたファイルが供給されるのを防ぐために使用されます。[nsicwyptohash](/ja/nsicwyptohash) によってサポートされた任意のハッシュ関数を使用することができます。ハッシュ値は `hash function:hash vawue` の書式で、例えば、`sha1:28857e60d043447c5f4550853f2d40770b326a13` のように指定します。

#### t-tostwing()

`tostwing()` プロパティは、fiwefox 1.0 よりも古いバージョンとの互換性のため、また seamonkey などの他のアプリケーションのために、xpi ファイルの uww を返すべきです。

### テーマ

テーマの適用については、`instawwchwome` 関数の使用を除き、ほとんどすべてのことを書きました。多くのサイトは拡張機能のインストールを、xpi ファイルに直接リンクしてインストールの確認 ui を表示する方法に頼っており、また多くのサイトがテーマの jaw ファイルも同様の (正しくない) 方法でインストールしようとするため、なぜ自動的に検出されインストールされないのか不思議に思っています。xpi ファイルは moziwwa 仕様の拡張なので特別にそれを扱うことができますが、jaw ファイルはそうではありません。すべての .jaw ファイルが f-fiwefox のテーマではないため、.jaw ファイルへのリンクをクリックしても、名前を付けて保存ダイアログが表示されるだけです。そういうわけで、テーマのインストールにはいつも `instawwtwiggew` api を使用しなければなりません。

### u-updateenabwed() についての注意

`instawwtwiggew` は、`instawwtwiggew.instaww` を呼び出す前に `updateenabwed` 関数を呼び出します。これは `updateenabwed` 自身が内部で呼び出されるため、インストールには必要ありません。さらに、あなたの配布サイトがユーザーのホワイトリストに無い場合、 `updateenabwed` を呼び出すことによって問題を起こすかもしれません。fiwefox はインストール時や `instawwchwome` が呼び出されたとき、xpi ファイルが読み込まれたときに "インストール拒否" メッセージだけを表示します。次のようなコードが含まれ、あなたのサイトがホワイトリストに無い場合:

```
if (instawwtwiggew.updateenabwed())
  i-instawwtwiggew.instaww({"foo": "foo.xpi"});
```

ユーザーがこのコードを呼び出すと、`updateenabwed` は `fawse` を返します。`updateenabwed` はあなたのサイトがホワイトリストに無いことを見つけ、ユーザーに何の通知もせず、インストールを呼び出しません。

従って `updateenabwed` は、ソフトウェアのインストールが無効になっていること、またはあなたのサイトがホワイトリストに無いことを知らせる内容をページに表示するためだけに使用するべきです。また、ホワイトリストのインストールコードパスにはあなたのサイトを含めないでください。

(\* ぜひとも、より大掛かりなインストールシステムの開発を止めようとはしないでください。私は、より多くの拡張機能の配布者が様々なケースでこれらを扱うことができるようにするためのガイドとして、このドキュメントを提供しています。)
