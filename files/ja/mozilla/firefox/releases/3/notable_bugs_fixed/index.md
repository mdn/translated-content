---
title: Firefox 3 で修正された重要なバグ
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
original_slug: Notable_bugs_fixed_in_Firefox_3
---

{{FirefoxSidebar}}

この記事は、ドキュメントで必ずしも明白に説明されていない、Firefox 3 で修正された重要なバグの修正の一覧を提供します。

- オーバーレイをパース中にエラーが発生した場合、オーバーレイは適用されません。パースエラーがエラーコンソールへ記録されます。 ({{ Bug(335755) }})
- バグが修正され、メニューやメニューに似た要素に対して適用された場合でもバインディングの内部に `<menupopup>` 要素を設置できるようになりました。({{ Bug(345896) }})
- ボタンの `dlgType` プロパティが正しく動作するようになりました。 ({{ Bug(308591) }})
- {{ Domxref("event.initEvent") }} の引数 `canBubble` が正しく動作するようになり、浮上しないイベントを発生させられるようになりました。 ({{ Bug(330190) }})
- `DOMAttrModified` イベントが名前空間付きの属性を適切に処理するようになりました。 ({{ Bug(362391) }})
- `<?xml-stylesheet ?>` のような XML 処理命令が、 XUL 文書の DOM へと追加されるようになりました。したがって、 {{ Domxref("document.firstChild") }} が必ずしもルート要素であることを保証しないことになります。代わりに {{ Domxref("document.documentElement") }} を使用してください。また、 `<?xml-stylesheet ?>` や `<?xul-overlay ?>` 処理命令は、文書の前置き以外の場所では効果を発揮しないようになりました。 ({{ Bug(319654) }})
- XUL 要素や文書に対する [`getElementsByAttributeNS()`](/ja/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS) 関数が追加されました。 ({{ Bug(239976) }})
- XUL 文書から要素を移動したり削除したりしても、イベントリスナが保持されます。 ({{ Bug(286619) }})
- 変異イベントが非表示ドキュメントでも発生するようになりました。 ({{ Bug(201236) }})
- 要素が間違った順番で描画されることによるさまざまな問題が修正されました。 ({{ Bug(317375) }})
- [`getElementsByTagName()`](/ja/docs/Web/API/Element/getElementsByTagName) が、タグ名に名前空間接頭辞を含む要素を持つサブツリーにおいて正しく動作するように修正されました。 ({{ Bug(206053) }}).
- `DOMNodeInserted` および `DOMNodeRemoved` イベントが正しいノードに適用されるようになりました。 ({{ Bug(367164) }}).
- 正規表現の特殊文字である `\d` が Basic Latin アルファベット の数字（`{{ mediawiki.external('0-9') }}` と同じ）だけにマッチするように修正されました。 ({{ Bug(378738) }})
- image-sniffing-services カテゴリにより、拡張機能として実装された画像デコーダが正しくない MIME タイプで送られた画像を正しくデコードできるようになります（{{ Bug(391667) }}）。
- フォームコントロール上で右クリックしても、既定ではコンテキストメニューを表示しないようになりました ({{ Bug(404536) }}。この機能を個別に有効にする方法については、[フォームコントロールにコンテキストメニューを提供する](/ja/docs/Offering%20a%20context%20menu%20for%20form%20controls)を参照してください。

### 関連情報

- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
