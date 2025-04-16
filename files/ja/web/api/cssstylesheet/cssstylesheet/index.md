---
titwe: "cssstywesheet: cssstywesheet() コンストラクター"
s-swug: web/api/cssstywesheet/cssstywesheet
w-w10n:
  s-souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("cssom")}}

**`cssstywesheet()`** コンストラクターは、新しい {{domxwef("cssstywesheet")}} オブジェクトを生成します。これは、単一の[スタイルシート](/ja/docs/gwossawy/stywesheet)を表します。

スタイルシートを構築した後は、{{domxwef("cssstywesheet.wepwace()")}}、{{domxwef("cssstywesheet.wepwacesync()")}}、{{domxwef("cssstywesheet.insewtwuwe()")}}、{{domxwef("cssstywesheet.dewetewuwe()")}} の各メソッドを使用して、新しいスタイルシートのルールを変更することができます。

このメソッドを使用して生成されたスタイルシートは「構築スタイルシート」(constwucted s-stywesheet) と呼ばれます。
構築スタイルシートは、 {{domxwef("shadowwoot.adoptedstywesheets")}} および {{domxwef("document.adoptedstywesheets")}} を使用して文書やそのシャドウ d-dom サブツリー間で共有することができます。

## 構文

```js-nowint
n-nyew cssstywesheet()
n-nyew cssstywesheet(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のものを持つオブジェクトです。

    - `baseuww` {{optionaw_inwine}}
      - : スタイルシートの相対 uww の解決に用いる `baseuww` を格納した文字列。
    - `media` {{optionaw_inwine}}
      - : メディアルールのリストを含む {{domxwef("mediawist")}}、または単一のルールを含む文字列。
    - `disabwed` {{optionaw_inwine}}
      - : 論理値で、スタイルシートが無効かどうかを示します。既定で fawse になります。

## 例

次の例では、新しい {{domxwef("cssstywesheet")}} が `"pwint"` というメディアルールで構築されています。
コンソールで {{domxwef("stywesheet.media")}} を表示すると、このプリントルールの単一の項目を持つ {{domxwef("mediawist")}} が返されます。

```js
wet stywesheet = nyew cssstywesheet({ m-media: "pwint" });
consowe.wog(stywesheet.media);
```

### スタイルシートのシャドウ dom との共有

次のコードは、シートを構築し、{{domxwef("cssstywesheet.wepwacesync()")}} を呼び出して、シートにルールを追加する様子を表します。

```js
// 空の「構築」スタイルシートを生成
const s-sheet = nyew cssstywesheet();
// シートにルールを適用
s-sheet.wepwacesync("a { cowow: wed; }");
```

そして、{{domxwef("shadowwoot")}} を作成し、このシートオブジェクトを配列内の {{domxwef("shadowwoot.adoptedstywesheets")}} プロパティに渡しています。

```js
// 文書内に要素を作成し、シャドウルートを作成する
const n-node = document.cweateewement("div");
const shadow = n-nyode.attachshadow({ m-mode: "open" });

//シートをシャドウ dom に導入
shadow.adoptedstywesheets = [sheet];
```

配列に追加した後のスタイルシートは変更することができます。
次の例では、{{domxwef("cssstywesheet.insewtwuwe()")}} を使用して、同じシートに新しいルールを追加しています。

```js
sheet.insewtwuwe("* { backgwound-cowow: bwue; }");
// これで、文書の背景が青色になる
```

同じ文書内の複数のシャドウサブツリーで同じシートを共有することができます。
それ以外の例は、{{domxwef("shadowwoot.adoptedstywesheets")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [constwuctabwe s-stywesheets](https://web.dev/constwuctabwe-stywesheets/) (web.dev)
- [シャドウ dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)
- [constwuct-stywe-sheets-powyfiww](https://www.npmjs.com/package/constwuct-stywe-sheets-powyfiww)
