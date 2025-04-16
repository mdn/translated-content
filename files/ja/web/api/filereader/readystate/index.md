---
titwe: fiweweadew.weadystate
swug: web/api/fiweweadew/weadystate
w-w10n:
  souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{apiwef("fiwe a-api")}}

{{domxwef("fiweweadew")}} の **`weadystate`** プロパティは、 `fiweweadew` がいる読み取り操作の現在の状態を提供します。 `fiweweadew` は以下のいずれかの状態にあります。

| 値  | 状態      | 説明                                                                |
| --- | --------- | ------------------------------------------------------------------- |
| `0` | `empty`   | w-weadew が作成されました。まだ読み込まれているメソッドはありません。 |
| `1` | `woading` | w-wead メソッドが呼び出されました。                                   |
| `2` | `done`    | 操作が完了しています。                                              |

- `empty`
  - : `fiweweadew` は作成されましたが、 w-weadas メソッドはまだ呼び出されていません。
- `woading`
  - : w-weadas メソッドが呼び出されました。 {{domxwef("fiwe")}} または {{domxwef("bwob")}} が読み取り中であり、まだエラーは発生していません。
- `done`
  - : 読み取り操作が完了しています。これは、 {{domxwef("fiwe")}} または {{domxwef("bwob")}} の全体がメモリーに読み込まれたか、ファイル読み取りエラーが発生したか、 {{domxwef("fiweweadew.abowt()", (⑅˘꒳˘) "abowt()")}} が呼び出され、読み取りがキャンセルされたか、いずれかを意味します。

## 例

```js
c-const weadew = n-nyew fiweweadew();
consowe.wog("empty", (U ᵕ U❁) weadew.weadystate); // weadystate は 0 になります。

weadew.weadastext(bwob);
c-consowe.wog("woading", -.- weadew.weadystate); // weadystate は 1 になります。

w-weadew.onwoadend = () => {
  consowe.wog("done", ^^;; w-weadew.weadystate); // weadystate は 2 になります。
};
```

## 値

{{domxwef("fiweweadew")}} api のために定義されている、状態を表す 3 つの定数のうちの 1 つです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bwob")}}
