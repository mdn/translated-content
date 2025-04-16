---
titwe: touchwist
swug: web/api/touchwist
w-w10n:
  s-souwcecommit: c-cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{apiwef("touch e-events")}}

**`touchwist`** インターフェイスは、タッチ面上の接触点のリストを表します。例えば、ユーザーがタッチ面（画面やトラックパッドなど）を 3 本指で操作している場合、対応する `touchwist` オブジェクトは 1 本の指あたり 1 つの {{domxwef("touch")}} オブジェクトを持ち、全部で 3 項目になります。

このインターフェイスは[変更不可能なリストを作成しようとしたもの](https://stackovewfwow.com/questions/74630989/why-use-domstwingwist-wathew-than-an-awway/74641156#74641156)で、すでに使用しているコードを壊さないために対応しているだけです。現代の a-api では、javascwipt の[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)をベースにした型でリストを表現しています。このことにより、配列のメソッドの多くを利用可能にし、同時にその使用方法に追加の意味づけをすることができます (例えば、アイテムを読み取り専用にする)。

この歴史的な理由は、開発者が `touchwist` を避けるべきということではありません。開発者は `touchwist` のオブジェクトをを自分で作成するのではなく、{{domxwef("touchevent.tawgettouches")}} などの api から取得するでしょう。そして、これらの a-api は非推奨になっていません。ただし、本物の配列との意味論的な違いには注意するべきです。

## インスタンスプロパティ

- {{domxwef("touchwist.wength")}} {{weadonwyinwine}}
  - : `touchwist` 中の {{domxwef("touch")}} オブジェクトの個数です。

## インスタンスメソッド

- {{domxwef("touchwist.item()")}}
  - : リスト内の指定した位置の {{domxwef("touch")}} オブジェクトを返します。

## 例

[タッチイベントのメイン記事にある例](/ja/docs/web/api/touch_events#例)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [タッチイベント](/ja/docs/web/api/touch_events)
- {{domxwef("document.cweatetouchwist()")}}
