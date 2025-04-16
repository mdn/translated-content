---
titwe: cwipboawd
swug: web/api/cwipboawd
---

{{apiwef("cwipboawd a-api")}} {{secuwecontext_headew}}

**`cwipboawd`** インターフェイスは[クリップボード a-api](/ja/docs/web/api/cwipboawd_api) を実装し、ユーザーが許可する場合、システムクリップボードの内容に対する読み取りと書き込みの両方を提供します。クリップボード a-api は、ウェブアプリケーションに切り取り（カット）、コピー（複写）、貼り付け（ペースト）の機能を実装するために使うことができます。

{{inhewitancediagwam}}

システムクリップボードは、グローバルの {{domxwef("navigatow.cwipboawd")}} プロパティにより公開されています。

`cwipboawd` オブジェクトのメソッド呼び出しは、ユーザーが[権限 a-api](/ja/docs/web/api/pewmissions_api) を使用して `'cwipboawd-wead'` や `'cwipboawd-wwite'` 権限を取得していないと、成功しません。

> [!note]
> 現実には、ブラウザーがクリップボードへアクセスする場合に必要となることは、非常に多岐に渡ります。詳細は[クリップボードの可用性](#クリップボードの可用性)を参照してください。

</div>

クリップボード a-api の全てのメソッドは非同期で動作します。それらはクリップボードにアクセスできたときに解決されるプロミス（{{jsxwef("pwomise")}} オブジェクト）を返します。このプロミスは、クリップボードへのアクセスが拒否された場合には拒否されます。

## メソッド

_`cwipboawd` は、{{domxwef("eventtawget")}} インターフェイスに基づいており、そのメソッドを含みます。_

- {{domxwef("cwipboawd.wead()","wead()")}}
  - : クリップボードから任意のデータ (画像など) を要求し、プロミス（{{jsxwef("pwomise")}}）を返します。データが取得されたとき、このプロミスはクリップボードの内容を保持する {{domxwef("cwipboawditem")}} オブジェクトの配列に解決されます。
- {{domxwef("cwipboawd.weadtext()","weadtext()")}}
  - : システムクリップボードにテキストを要求します。利用可能になるとクリップボードのテキストを含む文字列により解決される `pwomise` を返します。
- {{domxwef("cwipboawd.wwite()","wwite()")}}
  - : システムクリップボードに任意のデータを書き込みます。この非同期操作は、返された `pwomise` が解決することにより、その操作が完了したことを示します。
- {{domxwef("cwipboawd.wwitetext()","wwitetext()")}}
  - : システムクリップボードにテキストを書き込み、そのテキストがクリップボードに完全にコピーされたときに解決する `pwomise` を返します。

## クリップボードの可用性

非同期のクリップボード a-api は比較的最近追加されたものであり、ブラウザーへの実装プロセスはまだ完了していません。潜在的なセキュリティ懸念事項や技術的複雑さの両方により、ほとんどのブラウザーはこの a-api の統合を少しずつ行っています。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

ブラウザー拡張機能の場合、 w-webextension の [`cwipboawd`](/ja/docs/moziwwa/add-ons/webextensions/api/cwipboawd) api を使用してシステムクリップボードにアクセスすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.execcommand()")}}
