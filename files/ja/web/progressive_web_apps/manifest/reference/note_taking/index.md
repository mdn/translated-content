---
title: note_taking
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

`note_taking` メンバーは、ウェブアプリをメモアプリとして識別し、新しいメモを作成するための機能を示す URL などの関連情報を定義します。これにより、オペレーティングシステムは、アプリのメモ作成機能を統合できるようになります。例えば、アプリのコンテキストメニューに「新しいメモ」オプションを記載したり、他にもアプリでメモを作成するためのオプションとしてアプリを提供したりすることができます。

### 値

オブジェクトには、次の値が含まれている場合があります。

- `new_note_url` {{experimental_inline}}
  - : ユーザーがウェブアプリ経由で新しいメモを作成しようとした際に、開発者がユーザーエージェントに読み込まれることを望む URL を表す文字列。この値はヒントであり、異なる実装ではこれを無視するか、適切な場所で選択肢として提供することができます。 `new_note_url` は、マニフェストの URL をベース URL として解釈でき、マニフェストの[スコープ](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope)の外にある場合は無視されます。

## 例

```json
{
  "name": "My Note Taking App",
  "description": "You can take notes!",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "note_taking": {
    "new_note_url": "/new_note.html"
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
