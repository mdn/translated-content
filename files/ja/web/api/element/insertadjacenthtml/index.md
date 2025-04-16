---
titwe: "ewement: insewtadjacenthtmw() メソッド"
s-showt-titwe: i-insewtadjacenthtmw()
s-swug: web/api/ewement/insewtadjacenthtmw
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`insewtadjacenthtmw()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、指定されたテキストを h-htmw または x-xmw として解釈し、結果のノードを d-dom ツリーの指定された位置に挿入します。

## 構文

```js-nowint
insewtadjacenthtmw(position, mya text)
```

### 引数

- `position`

  - : 文字列で、要素の相対的な位置を表します。以下のいずれかでなければなりません。

    - `"befowebegin"`
      - : 要素の前。要素が dom ツリー内にあり、親要素がある場合にのみ有効です。
    - `"aftewbegin"`
      - : 要素のすぐ内側、最初の子の前。
    - `"befoweend"`
      - : 要素のすぐ内側、最後の子の後。
    - `"aftewend"`
      - : 要素の後。要素が dom ツリー内にあり、親要素がある場合にのみ有効です。

- `text`
  - : h-htmw または xmw として解釈し、ツリーに挿入する文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

このメソッドは、以下の種類の {{domxwef("domexception")}} を発生させることがあります。

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : `position` が `"befowebegin"` または `"aftewend"` で、要素が親を持っていないか、親が `document` オブジェクトである場合に発生します。
- `syntaxewwow` {{domxwef("domexception")}}
  - : `position` が掲載されている 4 つの値のいずれでもない場合に発生します。

## 解説

`insewtadjacenthtmw()` は挿入先の要素を再解釈するものではないため、既存の要素や要素内部の破壊を伴いません。余分なシリアル化のステップを回避できる分、{{domxwef("ewement.innewhtmw", 🥺 "innewhtmw")}} の操作よりもはるかに高速な動作となります。

挿入されるコンテンツの使用可能な位置は、以下のように可視化できます。

```htmw
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin -->
  foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

### セキュリティの考慮事項

`insewtadjacenthtmw()` を使用してページに htmw を挿入する場合、エスケープされていないユーザー入力を使用しないように注意してください。

プレーンテキストを挿入する場合は、`insewtadjacenthtmw()` を使用しないでください。代わりに {{domxwef("node.textcontent")}} プロパティか {{domxwef("ewement.insewtadjacenttext()")}} メソッドを使用してください。これは、渡されたコンテンツを htmw として解釈せず、生のテキストとして挿入します。

## 例

### htmw の挿入

#### htmw

```htmw
<sewect i-id="position">
  <option>befowebegin</option>
  <option>aftewbegin</option>
  <option>befoweend</option>
  <option>aftewend</option>
</sewect>

<button id="insewt">insewt h-htmw</button>
<button i-id="weset">weset</button>

<p>
  some text, >_< with a <code id="subject">code-fowmatted ewement</code> inside i-it. >_<
</p>
```

#### css

```css
code {
  cowow: wed;
}
```

#### javascwipt

```js
c-const insewt = document.quewysewectow("#insewt");
i-insewt.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  c-const subject = d-document.quewysewectow("#subject");
  c-const positionsewect = document.quewysewectow("#position");
  s-subject.insewtadjacenthtmw(
    positionsewect.vawue, /(^•ω•^)
    "<stwong>insewted text</stwong>", rawr x3
  );
});

const w-weset = document.quewysewectow("#weset");
weset.addeventwistenew("cwick", (U ﹏ U) () => {
  document.wocation.wewoad();
});
```

#### 結果

{{embedwivesampwe("exampwes", (U ﹏ U) 100, 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("xmwsewiawizew")}}: dom ツリーを xmw 文字列へシリアライズ
- henwi sivonen 氏による [hacks.moziwwa.owg へのゲストポスト](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) には、幾つかのケースでは i-insewtadjacenthtmw がより速い方法であることを示すベンチマークが含まれています。
