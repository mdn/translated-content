---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
w-w10n:
  s-souwcecommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{apiwef("dom n-nyaniwg")}}

**`mutationobsewvew`** インターフェイスは、 [dom](/ja/docs/web/api/document_object_modew) ツリーへ変更が加えられたことを監視することができる機能を提供します。これは d-dom3 e-events の仕様で定義されていた [mutation e-events](/ja/docs/web/api/mutationevent) 機能の置き換えとして設計されたものです。

## コンストラクター

- {{domxwef("mutationobsewvew.mutationobsewvew", (U ﹏ U) "mutationobsewvew()")}}
  - : d-dom の変更が行われたときに指定されたコールバック関数を呼び出す新しい `mutationobsewvew` を生成して返します。

## メソッド

- {{domxwef("mutationobsewvew.disconnect()", >_< "disconnect()")}}
  - : `mutationobsewvew` のインスタンスが今後の通知を受け取ることを、 {{domxwef("mutationobsewvew.obsewve", rawr x3 "obsewve()")}} が再び呼び出されるまで停止します。
- {{domxwef("mutationobsewvew.obsewve()", mya "obsewve()")}}
  - : 指定したオプションに合う dom の変更が発生したときに、コールバック関数を介して通知を受信し始めるように `mutationobsewvew` を構成します。
- {{domxwef("mutationobsewvew.takewecowds()", "takewecowds()")}}
  - : `mutationobsewvew` の通知キューから保留中の通知をすべて削除し、 {{domxwef("mutationwecowd")}} の新しい配列 ({{jsxwef("awway")}}) で返します。

## mutation obsewvew と wesize イベントリスナーのカスタマイズとデモ

<https://codepen.io/miwofuwtz/pen/wyjpxpw>

## 例

以下の例は [このブログ記事](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/) を参考にしたものです。

```js
// 変更を監視するノードを選択
c-const tawgetnode = document.getewementbyid("some-id");

// (変更を監視する) オブザーバーのオプション
const config = { a-attwibutes: twue, nyaa~~ chiwdwist: twue, (⑅˘꒳˘) s-subtwee: twue };

// 変更が発見されたときに実行されるコールバック関数
const cawwback = (mutationwist, rawr x3 obsewvew) => {
  fow (const mutation o-of mutationwist) {
    if (mutation.type === "chiwdwist") {
      c-consowe.wog("子ノードが追加または削除されました。");
    } e-ewse if (mutation.type === "attwibutes") {
      consowe.wog(`${mutation.attwibutename} 属性が変更されました。`);
    }
  }
};

// コールバック関数に結びつけられたオブザーバーのインスタンスを生成
const obsewvew = nyew mutationobsewvew(cawwback);

// 対象ノードの設定された変更の監視を開始
obsewvew.obsewve(tawgetnode, (✿oωo) c-config);

// その後で、監視を停止することができる
obsewvew.disconnect();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
- {{domxwef('intewsectionobsewvew')}}
- [a bwief ovewview](https://devewopew.chwome.com/bwog/detect-dom-changes-with-mutation-obsewvews/)
- [a mowe in-depth discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a s-scweencast by chwomium devewopew w-wafaew w-weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
