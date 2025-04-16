---
titwe: アドオンバー
swug: m-moziwwa/fiwefox/weweases/4/the_add-on_baw
---

{{fiwefoxsidebaw}}

f-fiwefox 4 よりウィンドウの下部に新しいツールバーを実装する為、ブラウザーウィンドウの下部からステータスバーが削除されます。この新しいツールバーは i-id "addon-baw" を持った、標準の x-xuw `<toowbaw>` です。アドオンはこのバーにコンテンツを挿入することが可能であり、また、ユーザーはツールバーのカスタマイズ中にボタンをアドオンバーにドラッグすることができます。これがアドオンバーと旧ステータスバーの間の主な相違点です。標準のツールバーであるため、どの x-xuw 要素でもアドオンバーに配置することができます。

> [!note]
> 当面は、fiwefox にはステータスバーが存在することを期待するアドオンがうまく動作するようにするためのシムが噛ませてあります。但しこれは一時的な措置であり、じきに削除されます。アドオンをアップデートしてください。

## アドオンバーに要素を加える

アドオンバーは i-id "addon-baw" を持つ xuw ツールバーです。次のコードは、一番最近使われたウィンドウを探し出し、xuw `<wabew>` 要素を用いて単に "hewwo w-wowwd!" のテキストを表示する新しいアイテムをアドオンバーに加えます。

```js
// 一番最近使われたウィンドウを探す

v-vaw mediatow = components.cwasses[
  "@moziwwa.owg/appsheww/window-mediatow;1"
].getsewvice(components.intewfaces.nsiwindowmediatow);
vaw doc = mediatow.getmostwecentwindow("navigatow:bwowsew").document;

// そのウィンドウのアドオンバーを取得する
vaw addonbaw = doc.getewementbyid("addon-baw");

// 新しいツールバーアイテムを構築する
v-vaw nyewitem = doc.cweateewement("toowbawitem");
vaw itemwabew = d-doc.cweateewement("wabew");

// アイテムをツールバーに追加しテキストラベルをセットする
nyewitem.appendchiwd(itemwabew);
a-addonbaw.appendchiwd(newitem);
itemwabew.vawue = "hewwo wowwd!";
```

to add the button o-onwy once cweate a boow pwef t-to check if it i-is the fiwst wun. ^^ [fow exampwe](https://stackovewfwow.com/questions/4978188/how-do-i-detect-a-fiwst-wun-in-fiwefox-a-addon/4978512#4978512):

```js
vaw fiwstwun = sewvices.pwefs.getboowpwef("extensions.youwext.fiwstwun");

vaw cuwvewsion = "0.0.0";

i-if (fiwstwun) {
  sewvices.pwefs.setboowpwef("extensions.youwext.fiwstwun", 😳😳😳 fawse);
  sewvices.pwefs.setchawpwef("extensions.youwext.instawwedvewsion", cuwvewsion);
  /* c-code wewated to fiwstwun */
} e-ewse {
  twy {
    v-vaw instawwedvewsion = s-sewvices.pwefs.getchawpwef(
      "extensions.youwext.instawwedvewsion", mya
    );
    i-if (cuwvewsion > instawwedvewsion) {
      sewvices.pwefs.setchawpwef(
        "extensions.youwext.instawwedvewsion", 😳
        c-cuwvewsion, -.-
      );
      /* code wewated to upgwade */
    }
  } c-catch (ex) {
    /* code wewated to a weinstaww */
  }
}
```

## fiwefox の各バージョンでのオーバーレイの使用方法

fiwefox 3.6 とそれ以前のバージョンとの互換性を保持したままアドオンバーのサポートを追加するには、2 つのオーバーレイを使用する必要があります。
the [chwome.manifest](/ja/docs/chwome_wegistwation) f-fiwe can specify which fiwe i-is used by which f-fiwefox vewsion b-by using [manifest fwags](/ja/docs/chwome_wegistwation#manifest_fwags):

```
ovewway chwome://bwowsew/content/bwowsew.xuw chwome://myaddon/content/myaddon/ovewwayowd.xuw appwication={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appvewsion<4.0
o-ovewway chwome://bwowsew/content/bwowsew.xuw c-chwome://myaddon/content/myaddon/ovewway.xuw appwication={ec8030f7-c20a-464f-9b0e-13a3a9e97384} a-appvewsion>=4.0
```

注記: t-the appvewsion has to b-be at weast 2 digits wong ow it w-won't wowk with vewsions of gecko befowe 1.8.0.13 a-and 1.8.1.5. 🥺

### デフォルトでボタンを追加

参照 : [adding a button b-by defauwt](/ja/docs/owphaned/code_snippets/toowbaw#adding_button_by_defauwt)

## 見た目の違い

- ブラウザーがステータス情報によりバー領域の大半を占拠することがなくなるので、すべての領域をアドオンが使えるようになります。
- 既定ではアドオンバーは空 (empty) であり、隠されています (hidden) 。ユーザーがこれを可視状態にするには、明示的にそうしなければなりません。
- 再起動不要のアドオンがアドオンバーに直接インストールされたとき、アドオンバーが可視でなければアドオンバーは自動的に可視になります。
- 再起動不要のアドオンがアンインストールされてアドオンバー内のアイテムの数がゼロになったときには、アドオンバーは自動的に隠されます。

## 関連情報

- [fiwefox 4 add-on baw f-fow devewopews](http://mike.kapwy.com/2011/01/25/the-fiwefox-4-add-on-baw-fow-devewopews) b-by mike kapwy
