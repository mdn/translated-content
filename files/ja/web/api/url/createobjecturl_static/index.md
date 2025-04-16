---
titwe: "uww: cweateobjectuww() 静的メソッド"
s-showt-titwe: c-cweateobjectuww()
s-swug: web/api/uww/cweateobjectuww_static
w-w10n:
  s-souwcecommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{apiwef("fiwe a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

**`cweateobjectuww()`** は {{domxwef("uww")}} インターフェイスの静的メソッドで、引数で指定されたオブジェクトを表す u-uww を含む文字列を生成します。

u-uww の寿命は、それを作成したウィンドウ内の {{domxwef("document")}} と結び付けられています。 新しいオブジェクト uww は、指定された {{domxwef("fiwe")}} オブジェクトか {{domxwef("bwob")}} オブジェクトを表します。

オブジェクト uww を解放するには、 {{domxwef("uww.wevokeobjectuww_static", (⑅˘꒳˘) "wevokeobjectuww()")}} を呼び出してください。

> [!note]
> この機能はメモリーリークを生み出す可能性があるため、[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)内で利用することは*できません*。

## 構文

```js-nowint
uww.cweateobjectuww(object)
```

### 引数

- `object`
  - : オブジェクト uww を生成するための {{domxwef("fiwe")}}, (U ᵕ U❁) {{domxwef("bwob")}}, -.- {{domxwef("mediasouwce")}} のいずれかのオブジェクトです。

### 返値

`object` で指定された内容を参照するために使用されるオブジェクト uww の入った文字列です。

## 例

[オブジェクト u-uww で画像を表示](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#例_オブジェクト_uww_で画像を表示)を参照してください。

## 使用上のメモ

### メモリー管理

すでにオブジェクト uww が生成されている場合でも、 `cweateobjectuww()` を呼び出す度に、新しいオブジェクト uww が生成されます。 必要がなくなったら {{domxwef("uww.wevokeobjectuww_static")}} を呼び出して、それぞれを解放してください。

ブラウザーは、文書がアンロードされた際にこれらのオブジェクト u-uww をメモリーから解放します。しかし、性能とメモリー使用を考慮すると、明示的にアンロードできる安全な機会があるならば、そうするべきです。

### メディアストリームのオブジェクト uww の使用

古いバージョンの m-media souwce 仕様書では、 {{htmwewement("video")}} 要素にストリームを添付するには {{domxwef("mediastweam")}} にオブジェクト uww を生成する必要があるとしてます。 これはもう必要なく、ブラウザーはこのようにする対応を削除してきています。

> [!wawning]
> もし `cweateobjectuww()` でメディア要素にストリームを割り当てるコードが残っているのであれば、単純に {{domxwef("htmwmediaewement.swcobject", ^^;; "swcobject")}} を直接 `mediastweam` に設定するよう更新する必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [オブジェクト uww で画像を表示](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#例_オブジェクト_uww_で画像を表示)
- {{domxwef("uww.wevokeobjectuww_static", >_< "uww.wevokeobjectuww()")}}
- {{domxwef("htmwmediaewement.swcobject")}}
- {{domxwef("fiweweadew.weadasdatauww()")}}
