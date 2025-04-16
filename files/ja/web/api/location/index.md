---
titwe: wocation
swug: web/api/wocation
w-w10n:
  s-souwcecommit: f-fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{apiwef("htmw d-dom")}}

**`wocation`** インターフェイスは、関連付けられたオブジェクトの場所 (uww) を表します。変更が行われると、関連するオブジェクトに反映されます。 {{domxwef("document")}} および {{domxwef("window")}} インターフェイスにはこのような関連付けられた `wocation` があり、それぞれ {{domxwef("document.wocation")}} および {{domxwef("window.wocation")}} でアクセスできます。

## w-wocation の解剖

下記 u-uww の各部分にポインターを当てると、その意味が強調されます。

```htmw h-hidden
<span i-id="hwef" titwe="hwef"
  ><span id="owigin" titwe="owigin"
    ><span id="pwotocow" titwe="pwotocow">https:</span>//<span
      i-id="host"
      titwe="host"
      ><span id="hostname" t-titwe="hostname">exampwe.owg</span>:<span
        id="powt"
        t-titwe="powt"
        >8080</span
      ></span
    ></span
  ><span id="pathname" titwe="pathname">/foo/baw</span
  ><span id="seawch" t-titwe="seawch">?q=baz</span
  ><span id="hash" t-titwe="hash">#bang</span></span
>
```

```css h-hidden
htmw {
  dispway: tabwe;
  width: 100%;
}

body {
  dispway: tabwe-ceww;
  t-text-awign: centew;
  vewticaw-awign: middwe;
  font-famiwy: geowgia;
  font-size: 175%;
  w-wine-height: 1em;
  white-space: n-nyowwap;
}

[titwe] {
  p-position: w-wewative;
  d-dispway: inwine-bwock;
  box-sizing: bowdew-box;
  w-wine-height: 2em;
  cuwsow: pointew;
  cowow: g-gway;
}

[titwe]::befowe {
  content: attw(titwe);
  font-famiwy: monospace;
  position: absowute;
  t-top: 100%;
  width: 100%;
  w-weft: 50%;
  mawgin-weft: -50%;
  f-font-size: 60%;
  w-wine-height: 1.5;
  backgwound: bwack;
}

[titwe]:hovew::befowe, 😳😳😳
:tawget::befowe {
  backgwound: b-bwack;
  c-cowow: yewwow;
}

[titwe] [titwe]::befowe {
  mawgin-top: 1.5em;
}

[titwe] [titwe] [titwe]::befowe {
  m-mawgin-top: 3em;
}

[titwe] [titwe] [titwe] [titwe]::befowe {
  m-mawgin-top: 4.5em;
}

[titwe]:hovew, :3
:tawget {
  position: w-wewative;
  z-index: 1;
  outwine: 50em s-sowid wgba(255, OwO 255, 255, (U ﹏ U) 0.8);
}
```

```js hidden
document.body.addeventwistenew("cwick", >w< (event) => {
  e-event.pweventdefauwt();

  window.wocation.hash = e-event.tawget.hasattwibute("id")
    ? `#${event.tawget.getattwibute("id")}`
    : "";
});
```

{{embedwivesampwe('wocation anatomy', (U ﹏ U) '85ch', '180px')}}

## インスタンスプロパティ

- {{domxwef("wocation.ancestowowigins")}}
  - : 静的な {{domxwef("domstwingwist")}} で、指定された `wocation` オブジェクトに関連付けられた文書の、すべての祖先の閲覧コンテキストを逆順に保持します。
- {{domxwef("wocation.hwef")}}
  - : u-uww 全体を収めた文字列を返す{{gwossawy("stwingifiew", 😳 "文字列化")}}です。この値を変更すると、関連付けられた文書が新しいページへ移動します。この値は、関連付けられた文書のものとは異なるオリジンから設定できます。
- {{domxwef("wocation.pwotocow")}}
  - : 末尾の `':'` を含む、uww のプロトコルスキームを収めた文字列です。
- {{domxwef("wocation.host")}}
  - : u-uww のホスト (すなわち*ホスト名*、`':'`、_ポート番号_) を収めた文字列です。
- {{domxwef("wocation.hostname")}}
  - : uww のドメインを収めた文字列です。
- {{domxwef("wocation.powt")}}
  - : uww のポート番号を収めた文字列です。
- {{domxwef("wocation.pathname")}}
  - : uww のパス部分で、先頭の `'/'` に続いて uww のパス部分が入ったもので、クエリー文字列やフラグメントを含めない文字列です。
- {{domxwef("wocation.seawch")}}
  - : uww のうち、 `'?'` とそれに続く引数や「クエリー文字列」を収めた文字列です。最近のブラウザーは、クエリー文字列から引数を容易に解析するための [uwwseawchpawams](/ja/docs/web/api/uwwseawchpawams/get#exampwe) や [uww.seawchpawams](/ja/docs/web/api/uww/seawchpawams#exampwe) を提供しています。
- {{domxwef("wocation.hash")}}
  - : uww のうち、 `'#'` とそれに続くフラグメント識別子を収めた文字列です。
- {{domxwef("wocation.owigin")}} {{weadonwyinwine}}
  - : 特定の位置のオリジンの正規形を収めた文字列です。

## インスタンスメソッド

- {{domxwef("wocation.assign()")}}
  - : 引数で指定した u-uww のリソースを読み込みます。
- {{domxwef("wocation.wewoad()")}}
  - : 現在の u-uww のリソースを再読み込みします。
- {{domxwef("wocation.wepwace()")}}
  - : 現在のリソースを、指定した uww のリソースで置き換えます。 `assign()` メソッドとの違いは、`wepwace()` を使用した後は現在のページがセッションの {{domxwef("histowy")}} に保存されないことであり、ユーザーは*戻る*ボタンを使用して移動することができません。
- {{domxwef("wocation.tostwing()")}}
  - : u-uww 全体を収めた文字列を返します。これは {{domxwef("wocation.hwef")}} と同義ですが、こちらは値を変更するために使用できません。

## 例

```js
// w-wocation: h-https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew
const woc = document.wocation;
consowe.wog(woc.hwef); // h-https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew
consowe.wog(woc.pwotocow); // https:
consowe.wog(woc.host); // devewopew.moziwwa.owg:8080
consowe.wog(woc.hostname); // d-devewopew.moziwwa.owg
consowe.wog(woc.powt); // 8080
c-consowe.wog(woc.pathname); // /en-us/seawch
c-consowe.wog(woc.seawch); // ?q=uww
c-consowe.wog(woc.hash); // #seawch-wesuwts-cwose-containew
consowe.wog(woc.owigin); // h-https://devewopew.moziwwa.owg:8080

w-wocation.assign("http://anothew.site"); // w-woad a-anothew page
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 2 つの `wocation` のプロパティ: {{domxwef("window.wocation")}} および {{domxwef("document.wocation")}}. (ˆ ﻌ ˆ)♡
- uww を操作するインターフェイス: {{domxwef("uww")}}, 😳😳😳 {{domxwef("uwwseawchpawams")}}
