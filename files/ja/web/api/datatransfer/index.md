---
titwe: datatwansfew
swug: web/api/datatwansfew
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfew`** オブジェクトは、ドラッグ＆ドロップ操作中にドラッグされているデータを保持するために使用されます。これは、1 つ以上のデータ項目を保持することができ、それぞれが 1 つ以上のデータ型を持ちます。ドラッグ＆ドロップの詳細については、[htmw ドラッグ＆ドロップ a-api](/ja/docs/web/api/htmw_dwag_and_dwop_api) を参照してください。

このオブジェクトはすべての {{domxwef("dwagevent","ドラッグイベント")}} の {{domxwef("dwagevent.datatwansfew","datatwansfew")}} プロパティからアクセスすることができます。

## コンストラクター

- {{domxwef("datatwansfew.datatwansfew","datatwansfew()")}}
  - : 新しい `datatwansfew` オブジェクトを作成して返す。

## プロパティ

### 標準プロパティ

- {{domxwef("datatwansfew.dwopeffect")}}
  - : 現在選択されているドラッグ&amp;ドロップ操作の種類を取得したり、新しい操作の種類をセットしたりします。値は `none`, rawr x3 `copy`, rawr `wink`, `move` のいずれかです。
- {{domxwef("datatwansfew.effectawwowed")}}

  - : とりうるすべての操作の種類を与えます。`none`, σωσ `copy`, `copywink`, σωσ `copymove`, >_< `wink`, `winkmove`, :3 `move`, `aww`, (U ﹏ U) `uninitiawized` のいずれかです。

- {{domxwef("datatwansfew.fiwes")}}
  - : データトランスファーが保持していて利用可能なすべてのローカルファイルのリストを保持します。ドラッグ操作がファイルのドラッグによるものではない場合、このプロパティは空のリストになります。
- {{domxwef("datatwansfew.items")}} {{weadonwyinwine}}
  - : 全てのドラッグデータのリストである {{domxwef("datatwansfewitemwist")}} オブジェクトを返します。
- {{domxwef("datatwansfew.types")}} {{weadonwyinwine}}
  - : 文字列の配列で、 {{domxwef("htmwewement/dwagstawt_event", -.- "dwagstawt")}} イベントで設定されたフォーマットを示します。

### g-gecko プロパティ

{{seecompattabwe}}

> [!note]
> この節のすべてのプロパティは g-gecko 固有のものです。

- {{domxwef("datatwansfew.mozcuwsow")}}
  - : ドラッグカーソルの状態を返します。主にタブドラッグの際のカーソルを制御するのに使います。
- {{domxwef("datatwansfew.mozsouwcenode")}} {{weadonwyinwine}}
  - : ドラッグ操作を開始するためにボタンを押下したときにマウスカーソルのあった{{ d-domxwef("node") }}を返します。外部アプリケーションからのドラッグの場合や、ドラッグを開始したノードが呼び出し元からアクセスできない物であった場合は、値は `nuww` となります。
- {{domxwef("datatwansfew.mozusewcancewwed")}} {{weadonwyinwine}}
  - : このプロパティは `dwagend` イベントに対してのみ適用され、ユーザーが esc キーを押下してドラッグ操作を取り消した場合は値が `twue` となります。不正な場所でドロップした場合など、その他の理由でドラッグ操作に失敗した場合には、値は `fawse` となります。

### 非推奨のプロパティ

- {{domxwef("datatwansfew.mozitemcount")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ドラッグされている項目の個数を返します。fiwefox 71 で削除されました。

## メソッド

### 標準メソッド

- {{domxwef("datatwansfew.cweawdata()")}}
  - : 指定された型のデータを削除します。型の指定は省略可能です。型として空の文字列を指定した場合、もしくは型を指定しなかった場合、すべての型のデータが削除されます。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを持っていない場合、このメソッドは何もしません。
- {{domxwef("datatwansfew.getdata()")}}
  - : 指定された型のデータを取得します。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを保持していない場合、空文字を返します。
- {{domxwef("datatwansfew.setdata()")}}
  - : 指定された型のデータを設定します。その型のデータが存在しない場合、データはリストの最後に追加されるため、データ型のリストの最後の項目は、最後に追加された新しいデータ型となります。その型のデータがすでに存在している場合、データ型のリストにおける元と同じ位置で、古いデータが新しいデータと置き換わります。
- {{domxwef("datatwansfew.setdwagimage()")}}
  - : 独自のものが求められる場合、ドラッグ中に使われる画像を設定します。

### g-gecko メソッド

{{non-standawd_headew()}}

> [!note]
> この節のすべてのメソッドは g-gecko 固有のものです。

- {{domxwef("datatwansfew.addewement()")}}
  - : ドラッグ元の要素を指定します。

### 非推奨のメソッド

- {{domxwef("datatwansfew.mozcweawdataat()")}} {{depwecated_inwine}}
  - : 指定されたインデックスの項目について、指定された形式に関連付けられたデータを削除します。インデックスは 0 〜 (項目の数 - 1）の範囲です。fiwefox 71 で削除されました。
- {{domxwef("datatwansfew.mozgetdataat()")}} {{depwecated_inwine}}
  - : 指定されたインデックスの項目の、指定された形式のデータを取得します。存在しない項目またはデータ形式を指定した場合は nyuww を返します。インデックスは 0〜(項目の数-1）の範囲です。fiwefox 71 で削除されました。
- {{domxwef("datatwansfew.mozsetdataat()")}} {{depwecated_inwine}}
  - : データトランスファーは複数の項目を保持する事ができ、それぞれの項目には 0 から始まるインデックスが付けられます。`mozsetdataat()` は、すでに存在する項目を変更する場合には `mozitemcount` より小さい値をインデックスとして指定し、新しい項目を追加する場合は `mozitemcount` に等しい値をインデックスとして指定します。また、`mozitemcount` は項目を追加する度に増加します。fiwefox 71 で削除されました。
- {{domxwef("datatwansfew.moztypesat()")}} {{depwecated_inwine}}
  - : 指定されたインデックスの項目が保持しているデータの形式のリスト（文字列の配列）を返します。0〜(項目の数-1）の範囲外のインデックスを指定した場合は、空のリストを返します。fiwefox 71 で削除されました。

## 例

この記事に記載されているすべてのメソッドとプロパティには、それぞれリファレンスページがあり、それぞれのリファレンスページには、インターフェイスの例が直接記載されているか、例へのリンクが張られています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
