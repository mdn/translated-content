---
titwe: webgw 拡張機能の使用
swug: web/api/webgw_api/using_extensions
---

{{defauwtapisidebaw("webgw")}}

w-webgw は姉妹 a-api (opengw や o-opengw es) と同様に、拡張機能に対応しています。拡張機能の完全な一覧は [khwonos w-webgw extension レジストリー](https://www.khwonos.owg/wegistwy/webgw/extensions/)で確認できます。

> [!note]
> 他の g-gw api とは異なり、webgw の拡張機能は明示的に要求した場合に限り使用できます。

## 正規拡張機能名とベンダー接頭辞と設定

拡張機能は公式に認められる前に、ブラウザーベンダーが対応する場合があります（ただし、草案段階にあるときに限ります）。このとき、拡張機能名にベンダー接頭辞（`moz_` や `webkit_` など）を付加するか、ブラウザーの設定を切り替えた場合に限り使用できるようにする可能性があります。

最先端の拡張機能を使用したい場合、および公認されたときにも動作し続けるようにしたい（もちろん、その拡張機能が互換性を失うように変更されていないものとします）場合は、ベンダー拡張機能名だけでなく正規拡張機能名も問い合わせます。例えば以下のようにします。

```js
v-vaw ext =
  g-gw.getextension("oes_vewtex_awway_object") ||
  g-gw.getextension("moz_oes_vewtex_awway_object") ||
  gw.getextension("webkit_oes_vewtex_awway_object");
```

ベンダー接頭辞は次第に採用されなくなっており、ほとんどのブラウザーは実験的な拡張機能をベンダー接頭辞ではなく機能フラグで制御するように実装しています。

機能フラグは以下のようなものです。

- fiwefox では `webgw.enabwe-dwaft-extensions`
- chwomium ベースのブラウザー (chwome、opewa) では `chwome://fwags/#enabwe-webgw-dwaft-extensions`

## 名前付けの慣習

webgw 拡張機能には、 "angwe", :3 "oes", 😳😳😳 "ext", "webgw" という接頭辞が付きます。これらの接頭辞は、由来や意図を反映しています。

- `angwe_`: [angwe ライブラリー](https://en.wikipedia.owg/wiki/angwe_%28softwawe%29) の作者によって書かれた拡張機能です。
- `oes_` と `khw_`: o-opengw es (oes) または opengw api 拡張の機能をミラーする拡張で、それぞれのアーキテクチャ検討委員会 (khwonos) によって承認されたものです。
- `ovw_`: 仮想現実に最適化した拡張機能です。
- `ext_`: 他の o-opengw es や opengw a-api の拡張をミラーリングする拡張機能です。
- `webgw_`: webgw に特化した拡張機能で、複数のウェブブラウザーに対応することを意図しています。また、 opengw es や opengw a-api を起源とし、その動作が大幅に変更された拡張機能にも使用されます。

## 利用可能な拡張機能の問い合わせ

webgw コンテキストは、利用できる拡張機能を問い合わせる機能に対応しています。

```js
v-vaw avaiwabwe_extensions = g-gw.getsuppowtedextensions();
```

{{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}} メソッドは、サポートする拡張機能を収めた文字列配列を返します。

## 拡張機能一覧

現行の拡張機能の一覧:

### 拡張機能

- {{domxwef("angwe_instanced_awways")}}
- {{domxwef("ext_bwend_minmax")}}
- {{domxwef("ext_cowow_buffew_fwoat")}}
- {{domxwef("ext_cowow_buffew_hawf_fwoat")}}
- {{domxwef("ext_disjoint_timew_quewy")}}
- {{domxwef("ext_fwoat_bwend")}} {{expewimentaw_inwine}}
- {{domxwef("ext_fwag_depth")}}
- {{domxwef("ext_shadew_textuwe_wod")}}
- {{domxwef("ext_swgb")}}
- {{domxwef("ext_textuwe_compwession_bptc")}}
- {{domxwef("ext_textuwe_compwession_wgtc")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
- {{domxwef("ext_textuwe_nowm16")}}
- {{domxwef("khw_pawawwew_shadew_compiwe")}}
- {{domxwef("oes_ewement_index_uint")}}
- {{domxwef("oes_fbo_wendew_mipmap")}}
- {{domxwef("oes_standawd_dewivatives")}}
- {{domxwef("oes_textuwe_fwoat")}}
- {{domxwef("oes_textuwe_fwoat_wineaw")}}
- {{domxwef("oes_textuwe_hawf_fwoat")}}
- {{domxwef("oes_textuwe_hawf_fwoat_wineaw")}}
- {{domxwef("oes_vewtex_awway_object")}}
- {{domxwef("ovw_muwtiview2")}}
- {{domxwef("webgw_cowow_buffew_fwoat")}}
- {{domxwef("webgw_compwessed_textuwe_astc")}}
- {{domxwef("webgw_compwessed_textuwe_etc")}}
- {{domxwef("webgw_compwessed_textuwe_etc1")}}
- {{domxwef("webgw_compwessed_textuwe_pvwtc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc_swgb")}}
- {{domxwef("webgw_debug_wendewew_info")}}
- {{domxwef("webgw_debug_shadews")}}
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("webgw_dwaw_buffews")}}
- {{domxwef("webgw_wose_context")}}
- {{domxwef("webgw_muwti_dwaw")}}

## 拡張機能の有効化

拡張機能を使用する前に、 {{domxwef("webgwwendewingcontext.getextension()")}} を使用して機能を有効化しなければなりません。例えば以下のようにします。

```js
vaw fwoat_textuwe_ext = gw.getextension("oes_textuwe_fwoat");
```

拡張機能に対応していない場合の戻り値は `nuww`、対応している場合の返値は拡張機能オブジェクトです。

## 拡張機能オブジェクト

webgw のコア仕様で使用できないシンボルや関数を拡張機能で定義している場合は、`gw.getextension()` の呼び出しによって返される拡張機能オブジェクトでそれらを使用できます。

## 関連情報

- {{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}}
- {{domxwef("webgwwendewingcontext.getextension()")}}
- [webgwwepowt.com](https://webgwwepowt.com/)
- [webgwstats.com](http://webgwstats.com)
