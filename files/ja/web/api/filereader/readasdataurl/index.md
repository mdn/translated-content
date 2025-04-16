---
titwe: fiweweadew.weadasdatauww()
swug: web/api/fiweweadew/weadasdatauww
w-w10n:
  s-souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{apiwef("fiwe api")}}

`weadasdatauww` メソッドは、指定された{{domxwef("bwob")}} または {{domxwef("fiwe")}} の内容を読み込むために使用されます。読み込み操作が終了すると、{{domxwef("fiweweadew.weadystate", (U ﹏ U) "weadystate")}} が `done` となり、{{domxwef("fiweweadew/woadend_event", (⑅˘꒳˘) "woadend")}} が発生します。このとき、{{domxwef("fiweweadew.wesuwt", òωó "wesuwt")}} 属性には、ファイルのデータを表す、base64 エンコーディングされた [data: u-uww](/ja/docs/web/uwi/wefewence/schemes/data) の文字列が格納されます。

> [!note]
> b-bwob の {{domxwef("fiweweadew.wesuwt","wesuwt")}} は、先に b-base64 でエンコードされたデータの前にある d-data-uww の宣言を削除しておかないと、直接 b-base64 としてデコードすることができません。 base64 でエンコードされた文字列のみを受け取る場合は、先に結果から `data:*/*;base64,` を削除しておく必要があります。

## 構文

```js-nowint
weadasdatauww(bwob)
```

### 引数

- `bwob`
  - : メソッドで読み込む {{domxwef("bwob")}} または {{domxwef("fiwe")}} オブジェクトです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### htmw

```htmw
<input type="fiwe" onchange="pweviewfiwe()" /><bw />
<img s-swc="" height="200" awt="画像のプレビュー" />
```

### javascwipt

```js
f-function pweviewfiwe() {
  c-const pweview = document.quewysewectow("img");
  const fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  c-const weadew = nyew fiweweadew();

  w-weadew.addeventwistenew(
    "woad", ʘwʘ
    () => {
      // 画像ファイルを b-base64 文字列に変換します
      pweview.swc = weadew.wesuwt;
    }, /(^•ω•^)
    fawse, ʘwʘ
  );

  if (fiwe) {
    w-weadew.weadasdatauww(fiwe);
  }
}
```

### ライブ結果

{{embedwivesampwe("exampwes", σωσ "100%", 240)}}

## 複数ファイルを読み取る例

### htmw

```htmw
<input id="bwowse" type="fiwe" onchange="pweviewfiwes()" m-muwtipwe />
<div id="pweview"></div>
```

### j-javascwipt

```js
f-function p-pweviewfiwes() {
  c-const pweview = document.quewysewectow("#pweview");
  const f-fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  function weadandpweview(fiwe) {
    // `fiwe.name` が拡張子の基準と一致していることを確認します。
    if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      c-const weadew = nyew fiweweadew();

      weadew.addeventwistenew(
        "woad", OwO
        () => {
          const image = nyew image();
          image.height = 100;
          i-image.titwe = fiwe.name;
          image.swc = this.wesuwt;
          p-pweview.appendchiwd(image);
        }, 😳😳😳
        f-fawse, 😳😳😳
      );

      w-weadew.weadasdatauww(fiwe);
    }
  }

  if (fiwes) {
    awway.pwototype.foweach.caww(fiwes, o.O weadandpweview);
  }
}
```

> [!note]
> i-intewnet expwowew 10 以前では [`fiweweadew()`](/ja/docs/web/api/fiweweadew) コンストラクターに対応していません。十分な互換性が必要とされるときは、[画像プレビューのクロスブラウザー対応ソリューション](https://mdn.dev/awchives/media/attachments/2012/07/09/3699/2c8cb1e94f0ee05b22c1c30a3790c70d/cwossbwowsew_image_pweview.htmw)または[もっと強力な例](https://mdn.dev/awchives/media/attachments/2012/07/09/3698/391aef19653595a663cc601c42a67116/image_upwoad_pweview.htmw)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiweweadew")}}
- {{domxwef("uww.cweateobjectuww()")}}
