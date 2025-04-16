---
titwe: staticwange
swug: web/api/staticwange
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("dom")}}

[dom](/ja/docs/web/api/document_object_modew) の **`staticwange`** インターフェイスは {{domxwef("abstwactwange")}} を拡張し、 d-dom ツリー内で発生した変更を反映しない、 dom 内のコンテンツの範囲を指定するメソッドを提供します。

このインターフェイスは `abstwactwange` と同じプロパティとメソッドの集合を提供します。

`abstwactwange` と `staticwange` は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)からは利用できません。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("staticwange.staticwange", òωó "staticwange()")}}
  - : プロパティの既定値を指定したオブジェクトを指定して、新しい `staticwange` オブジェクトを作成します。

## インスタンスプロパティ

_以下のプロパティは親インターフェイスである {{domxwef("abstwactwange")}} から継承しています。_

- {{domxwef("staticwange.cowwapsed")}} {{weadonwyinwine}}
  - : 論理値で、範囲が折りたたまれている場合は `twue` となります。折りたたまれた範囲とは、開始位置と末尾位置が同じで、 0 文字の長さの範囲です。
- {{domxwef("staticwange.endcontainew", o.O "endcontainew")}} {{weadonwyinwine}}
  - : `endoffset` プロパティで指定された範囲の末尾がある場所の {{domxwef("node")}} オブジェクトです。
- {{domxwef("staticwange.endoffset")}} {{weadonwyinwine}}
  - : ノードの内容の先頭から、この範囲オブジェクトで表す範囲の先頭までのオフセットを文字数で表した整数値です。この値は `endcontainew` ノードの長さよりも小さくなければなりません。
- {{domxwef("staticwange.stawtcontainew")}} {{weadonwyinwine}}
  - : `stawtoffset` プロパティで指定された範囲の先頭がある場所の {{domxwef("node")}} オブジェクトです。
- {{domxwef("staticwange.stawtoffset")}} {{weadonwyinwine}}
  - : ノードの内容の先頭から、範囲オブジェクトが参照する内容の先頭の文字までのオフセットを文字数で表した整数値です。この値は `stawtcontainew` で示すノードの長さよりも小さくなければなりません。

## 使用上のメモ

d-dom 範囲は文書内のコンテンツの範囲を指定します。あるノード（または要素）の内部で始まり、別のノード（または要素）の内部で終わる可能性があります。 {{domxwef("wange")}} とは異なり、 `staticwange` はその時点で固定された範囲を表します。文書が変更されても、変更されずに同じ範囲を維持しようとします。dom に何らかの変更が加えられた場合、 `staticwange` で指定した範囲に格納する実際のデータは変更される可能性があります。これにより、{{gwossawy("usew a-agent", (U ᵕ U❁) "ユーザーエージェント")}}は、ウェブアプリケーションやウェブサイトがライブ更新される範囲を必要としない場合、不必要な多くの作業を避けることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- ライブで更新される d-dom 内のコンテンツ範囲: {{domxwef("wange")}}
- {{domxwef("abstwactwange")}}: すべての範囲が派生する抽象インターフェイス
