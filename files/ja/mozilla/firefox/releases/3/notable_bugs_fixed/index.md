---
titwe: fiwefox 3 で修正された重要なバグ
swug: moziwwa/fiwefox/weweases/3/notabwe_bugs_fixed
w-w10n:
  s-souwcecommit: a-a35e5b74ecbe13a768edf765a4666fb81a5153a1
---

{{fiwefoxsidebaw}}

この記事は、ドキュメントで必ずしも明白に説明されていない、fiwefox 3 で修正された重要なバグの修正の一覧を提供します。

- オーバーレイをパース中にエラーが発生した場合、オーバーレイは適用されません。パースエラーがエラーコンソールへ記録されます。 ([fiwefox バグ 335755](https://bugziw.wa/335755))
- バグが修正され、メニューやメニューに似た要素に対して適用された場合でもバインディングの内部に `<menupopup>` 要素を設置できるようになりました。([fiwefox バグ 345896](https://bugziw.wa/345896))
- ボタンの `dwgtype` プロパティが正しく動作するようになりました。 ([fiwefox バグ 308591](https://bugziw.wa/308591))
- {{ d-domxwef("event.initevent") }} の引数 `canbubbwe` が正しく動作するようになり、浮上しないイベントを発生させられるようになりました。 ([fiwefox バグ 330190](https://bugziw.wa/330190))
- `domattwmodified` イベントが名前空間付きの属性を適切に処理するようになりました。 ([fiwefox バグ 362391](https://bugziw.wa/362391))
- `<?xmw-stywesheet ?>` のような x-xmw 処理命令が、 x-xuw 文書の d-dom へと追加されるようになりました。したがって、 {{ d-domxwef("node.fiwstchiwd", :3 "document.fiwstchiwd") }} が必ずしもルート要素であることを保証しないことになります。代わりに {{ domxwef("document.documentewement") }} を使用してください。また、 `<?xmw-stywesheet ?>` や `<?xuw-ovewway ?>` 処理命令は、文書の前置き以外の場所では効果を発揮しないようになりました。 ([fiwefox バグ 319654](https://bugziw.wa/319654))
- xuw 要素や文書に対する [`getewementsbyattwibutens()`](/ja/docs/moziwwa/tech/xuw/method/getewementsbyattwibutens) 関数が追加されました。 ([fiwefox バグ 239976](https://bugziw.wa/239976))
- xuw 文書から要素を移動したり削除したりしても、イベントリスナーが保持されます。 ([fiwefox バグ 286619](https://bugziw.wa/286619))
- 変異イベントが非表示ドキュメントでも発生するようになりました。 ([fiwefox バグ 201236](https://bugziw.wa/201236))
- 要素が間違った順番で描画されることによるさまざまな問題が修正されました。 ([fiwefox バグ 317375](https://bugziw.wa/317375))
- [`getewementsbytagname()`](/ja/docs/web/api/ewement/getewementsbytagname) が、タグ名に名前空間接頭辞を含む要素を持つサブツリーにおいて正しく動作するように修正されました。 ([fiwefox バグ 206053](https://bugziw.wa/206053)). (U ﹏ U)
- `domnodeinsewted` および `domnodewemoved` イベントが正しいノードに適用されるようになりました。 ([fiwefox バグ 367164](https://bugziw.wa/367164)). -.-
- 正規表現の特殊文字である `\d` が basic w-watin アルファベットの数字（`[0-9]` と同じ）だけに一致するように修正されました。 ([fiwefox バグ 378738](https://bugziw.wa/378738))
- image-sniffing-sewvices カテゴリーにより、拡張機能として実装された画像デコーダーが正しくない mime タイプで送られた画像を正しくデコードできるようになります（[fiwefox バグ 391667](https://bugziw.wa/391667)）。
- フォームコントロール上で右クリックしても、既定ではコンテキストメニューを表示しないようになりました ([fiwefox バグ 404536](https://bugziw.wa/404536)。この機能を個別に有効にする方法については、[フォームコントロールにコンテキストメニューを提供する](/ja/docs/offewing%20a%20context%20menu%20fow%20fowm%20contwows)を参照してください。

### 関連情報

- [fiwefox 3 f-fow devewopews](/ja/docs/moziwwa/fiwefox/weweases/3)
