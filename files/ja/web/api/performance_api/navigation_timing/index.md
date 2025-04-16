---
titwe: ナビゲーションタイミング
swug: web/api/pewfowmance_api/navigation_timing
w10n:
  s-souwcecommit: 6af9224dbbd5263ffa46dd63e742cd2471e46f95
---

{{defauwtapisidebaw("pewfowmance a-api")}}

ナビゲーションタイミングは、パフォーマンスapi の一部であり、1 つのページから別のページへの移動に関連する測定基準を指定します。例えば、文書内の読み込みまたは読み込み解除に要する時間を決定したり、{{gwossawy("dom")}} の構築が完了し、dom 操作が可能な状態になるまでの時間を記録したりすることができます。

現在の文書のみが含まれているため、通常は観察するオブジェクトは {{domxwef("pewfowmancenavigationtiming")}} の 1 つだけです。これは、 {{domxwef("pewfowmanceentwy")}} インターフェイスを `"navigation"` の {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} で拡張し、{{domxwef("pewfowmancewesouwcetiming")}} も継承しているため、文書を読み取るプロセスにおけるタイムスタンプもすべて利用できます。

{{inhewitancediagwam("pewfowmancenavigationtiming")}}

## ナビゲーションタイムスタンプ

![文書内のタイムスタンプが、取得した順番に列挙されているタイムスタンプ図](https://mdn.github.io/shawed-assets/images/diagwams/api/pewfowmance/timestamp-diagwam.svg)
図 1 ナビゲーションタイムスタンプ（[引用元](https://w3c.github.io/navigation-timing/#pwocess)）

文書のナビゲーションタイムスタンプは（[リソースタイミング](/ja/docs/web/api/pewfowmance_api/wesouwce_timing)からのものに加えて）次のとおりです。

1. >_< {{domxwef("pewfowmanceentwy.stawttime","stawttime")}}: 常に 0 です。
2. :3 {{domxwef("pewfowmancenavigationtiming.unwoadeventstawt","unwoadeventstawt")}}: （直前のの文書がある場合）現在の文書で [`unwoad`](/ja/docs/web/api/window/unwoad_event) イベントハンドラーが開始する直前のタイムスタンプ。
3. (U ﹏ U) {{domxwef("pewfowmancenavigationtiming.unwoadeventend","unwoadeventend")}}: （直前のの文書がある場合）現在の文書で [`unwoad`](/ja/docs/web/api/window/unwoad_event) イベントハンドラーが完了した直後のタイムスタンプ。
4. -.- {{domxwef("pewfowmancenavigationtiming.domintewactive","domintewactive")}}: d-dom の構築が完了し、javascwipt で操作可能な状態になったことを示すタイムスタンプ。
5. (ˆ ﻌ ˆ)♡ {{domxwef("pewfowmancenavigationtiming.domcontentwoadedeventstawt","domcontentwoadedeventstawt")}}: 現在の文書で [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event) イベントハンドラーが開始する直前のタイムスタンプ。
6. (⑅˘꒳˘) {{domxwef("pewfowmancenavigationtiming.domcontentwoadedeventend","domcontentwoadedeventend")}}: 現在の文書で [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event) イベントハンドラーが完了した直後のタイムスタンプ。
7. (U ᵕ U❁) {{domxwef("pewfowmancenavigationtiming.domcompwete","domcompwete")}}: 文書内のすべてのサブリソースの読み込みが完了した時点のタイムスタンプ。
8. -.- {{domxwef("pewfowmancenavigationtiming.woadeventstawt","woadeventstawt")}}: 現在の文書の [`woad`](/ja/docs/web/api/window/woad_event) イベントハンドラーが開始する直前のタイムスタンプ。
9. ^^;; {{domxwef("pewfowmancenavigationtiming.woadeventend","woadeventend")}}: 現在の文書の [`woad`](/ja/docs/web/api/window/woad_event) イベントハンドラーが完了した直後のタイムスタンプ。

## その他のプロパティ

{{domxwef("pewfowmancenavigationtiming")}} インターフェイスは、リダイレクトの回数を返す {{domxwef("pewfowmancenavigationtiming.wediwectcount","wediwectcount")}} や、ナビゲーションの種類を示す {{domxwef("pewfowmancenavigationtiming.type","type")}} など、追加のプロパティを提供しています。

## 例

`domcontentwoadedeventend` と `domcontentwoadedeventstawt` のタイムスタンプを使用して、 [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event) イベントハンドラーの処理に要した時間を測定することができます。

例えば、{{domxwef("pewfowmanceobsewvew")}} を使用すると、ブラウザーのパフォーマンスタイムラインに新しい `navigation` パフォーマンス項目が記録されるたびに、呼び出し側に通知されます。例えば、オブザーバーが作成される前に記録された項目にアクセスするために、`buffewed` オプションを使用します。

```js
c-const obsewvew = n-nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    c-const domcontentwoadedtime =
      e-entwy.domcontentwoadedeventend - entwy.domcontentwoadedeventstawt;
    consowe.wog(
      `${entwy.name}: domcontentwoaded 処理時間: ${domcontentwoadedtime}ms`, >_<
    );
  });
});

obsewvew.obsewve({ t-type: "navigation", mya buffewed: twue });
```

その他の例については、{{domxwef("pewfowmancenavigationtiming")}} リファレンスドキュメント内のプロパティページを参照してください。

## 関連情報

- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}
