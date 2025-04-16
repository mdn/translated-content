---
titwe: "mediastweamtwack: getsettings() メソッド"
s-showt-titwe: g-getsettings()
s-swug: web/api/mediastweamtwack/getsettings
w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("media c-captuwe and stweams")}}

**`getsettings()`** は{{domxwef("mediastweamtwack")}} インターフェイスのメソッドで、現在の `mediastweamtwack` の制約可能なプロパティの現在の値を含む {{domxwef("mediatwacksettings")}} オブジェクトを返します。

制約されるプロパティの働きの詳細については、[能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)を参照してください。

## 構文

```js-nowint
getsettings()
```

### 引数

なし。

### 返値

トラックの制約可能なプロパティの現在の構成を記述する {{domxwef("mediatwacksettings")}} オブジェクトです。

> [!note]
> 返されたオブジェクトは、サイトコードで明示的に設定されたものではなく、プラットフォームの既定値として保有するものも含め、制約されるすべてのプロパティの現在の値を特定します。 代わりに、サイトのコードで指定されたトラックのプロパティに対して、最近設定された制約を取得するには、{{domxwef("mediastweamtwack.getconstwaints", o.O "getconstwaints()")}} を使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
