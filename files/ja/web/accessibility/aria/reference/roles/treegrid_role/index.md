---
title: "ARIA: treegrid ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`treegrid` ロールは、要素を `tree` と同じ方法で行を展開および折りたたみできるグリッドとして識別します。

## 説明

`treegrid` は階層データグリッド（表）であり、編集可能または対話型の表形式情報で構成されます。`treegrid` は [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) と [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) のロールの組み合わせです。`grid` と同様に、`treegrid` は行、列、およびグリッドセルで構成されます。`tree` と同様に、`treegrid` 内の親ノードは展開および折りたたみ可能です。

`treegrid` ウィジェットには、1つ以上の [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 要素が含まれ、オプションで行をグループ化する [`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 要素も含まれます。各行には、1つ以上のセルが含まれます。各セルは、行要素の DOM の子孫であるか、行要素によって所有されており、[`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)、[`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)、または [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) 要素のいずれかです。列または行見出し情報を含まないすべてのセルには `gridcell` ロールが使用されます。

子行のセットを表示または非表示にするために展開または折りたたみできる `row` は **親行** です。各親行には、行要素または行に含まれるセルのいずれかに [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 状態が設定されています。

`aria-expanded` 状態は、子行が表示されている場合は `true` に設定され、子行が非表示の場合は `false` に設定されます。子行の表示を制御しない要素には `aria-expanded` 属性を設定しないでください。この属性の存在は、その属性を持つ要素が親であることを支援技術に示すためです。

グリッド UI で `aria-expanded` をサポートする行が必要な場合、またはグリッドで [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)、[`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)、または [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) をサポートする必要がある場合は、`grid` ではなく `treegrid` を使用してください。

行内の各 `row` または `gridcell` はキーボードフォーカス可能である必要があり、これらすべてのツリーグリッドの子孫のキーボードフォーカスは管理される必要があります。このルールの例外は、ソートやフィルターなどの機能を提供しない場合、フォーカス可能である必要がない列見出しセルです。個々のセルコンテンツが編集可能または対話型であるかどうかに関係なく、すべての行とセルは、フォーカス可能な要素を含むか、それ自体がフォーカス可能である必要があります。

### 単一選択および複数選択のツリーグリッド

`treegrid` がユーザーにアクションのために 1 つのアイテムのみを選択することを許可する場合、それは **単一選択** ツリーグリッドとして知られています。単一選択ツリーグリッドでは、フォーカスを持つアイテムは [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) で設定された選択状態も持ちます。

ツリーグリッドが複数の行またはセルの選択をサポートする場合、それは **複数選択** ツリーグリッドです。複数選択ツリーグリッドでは、選択状態はフォーカスとは独立しています。視覚的なデザインと支援技術は、選択されたアイテムとフォーカスを持つアイテムを区別する必要があります。

複数選択ツリーグリッドの場合、`treegrid` ロールを持つ要素に [`aria-multiselectable="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) を含めてください。選択されたすべての行またはセルは [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) が true に設定されています。選択可能だが現在選択されていないすべての行とセルは `aria-selected` が `false` に設定されています。個別に選択できない行とセルには `aria-selected` 属性を含めないでください。この属性の存在は、行またはセルが選択可能であることを支援技術に示すためです。

### 孤立した行

子 `row` または `rowgroup` が DOM 内の `treegrid` にネストされていない場合、非子孫の子のすべての ID を参照する [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性を `treegrid` 要素に設定する必要があります。行またはセルが `aria-owns` を介してツリーグリッドに含まれる場合、グリッドの実際の DOM の子孫も `aria-owns` 属性に含まれていない限り、`treegrid` 要素の DOM の子孫の後に支援技術に提示されます。

### 動的に読み込まれるコンテンツを持つツリーグリッド

一部の行または列が DOM にない場合や、スクロール時に動的に読み込まれる場合、[`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)、[`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)、[`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) および [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) が関係します。`aria-colcount` と `aria-rowcount` プロパティは `treegrid` に設定されます。値は、それぞれ完全に読み込まれたグリッドの列と行の総数です。各行と列のインデックスは、`treegrid` 要素ではなく、個々のセルに設定されます。

### ツリーグリッドのアクセシブル名、説明、およびフォーカス

`treegrid` のロールを持つ要素には、アクセシブル名が必要です。適切なラベルがコンテンツに表示されている場合は、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を介して名前を提供してください。つまり、ユーザーインターフェイスにツリーグリッドのラベルとして機能する要素がある場合は、`treegrid` のロールを持つ要素の属性として `aria-labelledby` を含め、属性の値をラベル付け要素の `id` に設定してください。可視ラベルがない場合は、代わりに [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してください。両方は使用しないでください。

コンテンツに `treegrid` のキャプションまたは説明が含まれている場合は、説明を含む要素の `id` を属性値として、`treegrid` 要素に [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を含めてください。

`treegrid` コンテナー自体がフォーカスを受け取る場合、その [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) プロパティの値は、選択された `row` 、`columnheader` 、`rowheader` または `gridcell` の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を参照する必要があります。ただし、これらのロール間のフォーカスを管理するために roving tabindex が使用されている場合、`aria-activedescendant` は使用すべきではありません。

`treegrid` が無効になっている場合は、その無効状態を視覚的に明らかにし、プログラム的に強制し、支援技術にその無効状態を知らせるために `treegrid` 自体に [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) 属性を含めてください。

### ツリーグリッドのソート

ツリーグリッドがソート機能を提供する場合、[`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) 属性は、グリッド自体ではなく、関連する見出しセル要素に含まれます。

### ツリーグリッドのメニュー

`treegrid` に右クリック時に開く [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) が付属している場合は、`treegrid` 要素に [`aria-haspopup="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) を含めてください。これは、`treegrid` に関連するポップアップがあることを支援技術に知らせます。キーボードユーザーとポインティングデバイスユーザーの両方がメニューを開いてフォーカスを設定する機能は、JavaScript で追加する必要があります。

### 読み取り専用のツリーグリッド

デフォルトでは、ツリーグリッドは編集可能であると想定されます。ツリーグリッドが編集可能でない場合は、[`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) 属性を使用して、`treegrid` が読み取り専用であることを支援技術に知らせてください。この属性値は、`treegrid` ロールを持つ要素に設定されると、すべての `columnheader` 、`rowheader` 、および `gridcell` 要素に伝播されます。そのグローバル値は、個々のツリーグリッド要素の子孫に `aria-readonly` を含めることで、個々の `gridcell` 要素に対して上書きできます。

すべての ARIA 属性と同様に、`aria-readonly` を追加することは、コンテンツが編集可能かどうかを支援技術に知らせるだけで、対話性を有効または無効にすることはありません。これは HTML のグローバル [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性または JavaScript で行う必要があります。

### 関連する WAI-ARIA ロール、状態、プロパティ

- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) ロール
  - : 表形式構造内のセルの行で、オプションで `rowgroup` 内にあります。グリッドセル、列見出し、または行見出しの 1 つ以上の行を含みます。
- [`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) ロール
  - : 表形式構造内の [行](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) のグループです。
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) ロール
  - : HTML の {{HTMLElement('td')}} 要素の機能を模倣することを意図しており、`grid` および `treegrid` ロールで見つかり、`row` の直接の子である必要があります。
- [columnheader](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロール
  - : 列の列見出し情報を含む行内のセルで、列スコープを持つネイティブ {{HTMLElement('th')}} 要素と似ています
- [rowheader](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) ロール
  - : 表形式構造内の `row` の見出し情報を含むセルです。
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : 展開可能なアイテムの場合、値は `true` または `false` です。また、アイテムが展開可能であることを示すため、アイテムが展開できない場合は存在すべきではありません。
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : DOM 階層を使用して関係を表現できない場合に、親とその子要素間のコンテキスト関係を識別します
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : この属性を使用して `treegrid` にラベルを付けます。`aria-labelledby` 属性は、一般的にツリーグリッドのタイトルに使用される要素の id です。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : `treegrid` を識別する人間が読める文字列値です。可視ラベルがある場合は、代わりに `aria-labelledby` を使用する必要があります。

### キーボードインタラクション

アクセシブルなツリーグリッドを作成するためには、キーボードでグリッドの行とセル間でフォーカスを移動できることを実装する必要があります。グリッドにフォーカスを移動すると、最初のセルまたは最初の行にフォーカスが移る場合があります。フォーカスが次の隣接するセルに移動するか、行に移動するかは、そのコンテンツ要件によって異なり、一部のツリーグリッドでは行にフォーカスを提供しません。

ユーザーが Tab でグリッドにフォーカスを移動した後など、グリッド内の要素がフォーカスを受け取った際に、以下のキーボードインタラクションをサポートする必要があります。

- <kbd>Enter</kbd>
  - : セルのみのフォーカスが有効で、`aria-expanded` プロパティを持つ最初のセルにフォーカスがある場合、子行を開くまたは閉じます。それ以外の場合は、セルのデフォルトアクションを実行します。
- <kbd>Tab</kbd>
  - : フォーカスを含む行に {{HTMLElement('input')}} 、 {{HTMLElement('button')}} または {{HTMLElement('a')}} などのフォーカス可能な要素が含まれている場合、行内の次の入力にフォーカスを移動します。フォーカスが行内の最後のフォーカス可能な要素にある場合、ツリーグリッドウィジェットから次のフォーカス可能な要素にフォーカスを移動します。
- <kbd>→</kbd>
  - : フォーカスが折りたたまれた行にある場合、行を展開します。フォーカスが展開された行にある場合、または子行を持たない行にある場合は、行内の最初のセルにフォーカスを移動します。フォーカスが行内の右端のセルにある場合、フォーカスは移動しません。フォーカスが他のセルにある場合、フォーカスを右に 1 セル移動します。
- <kbd>←</kbd>
  - : フォーカスが展開された行にある場合、行を折りたたみます。フォーカスが折りたたまれた行にある場合、または子行を持たない行にある場合、フォーカスは移動しません。フォーカスが行内の最初のセルにあり、行フォーカスがサポートされている場合、フォーカスを行に移動します。フォーカスが行内の最初のセルにあり、行フォーカスがサポートされていない場合、フォーカスは移動しません。フォーカスが他のセルにある場合、フォーカスを左に 1 セル移動します。
- <kbd>↓</kbd>
  - : フォーカスが行にある場合、フォーカスを 1 行下に移動します。フォーカスが最後の行にある場合、フォーカスは移動しません。フォーカスがセルにある場合、フォーカスを 1 セル下に移動します。フォーカスが列の最下部のセルにある場合、フォーカスは移動しません。
- <kbd>↑</kbd>
  - : フォーカスが行にある場合、フォーカスを 1 行上に移動します。フォーカスが最初の行にある場合、フォーカスは移動しません。フォーカスがセルにある場合、フォーカスを 1 セル上に移動します。フォーカスが列の最上部のセルにある場合、フォーカスは移動しません。
- <kbd>Page Down</kbd>
  - : フォーカスが行またはセルにある場合、フォーカスを事前に決められた数の行またはセル分下に移動します。通常、ツリーグリッドの高さに相当する分移動し、現在表示されている行セットの最下部の行が最初に表示される行の 1 つになるようにスクロールします。フォーカスが最後の行にある場合、フォーカスは移動しません。
- <kbd>Page Up</kbd>
  - : フォーカスが行またはセルにある場合、フォーカスを事前に決められた数の行分上に移動します。通常、ツリーグリッドの高さに相当する分移動し、現在表示されている行セットの最上部の行が最後に表示される行の 1 つになるようにスクロールします。フォーカスが最初の行にある場合、フォーカスは移動しません。
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : フォーカスが行にある場合、フォーカスを最初の行に移動します。フォーカスが最初の行にある場合、フォーカスは移動しません。フォーカスがセルにある場合、フォーカスを行内の最初のセルに移動します。フォーカスが行の最初のセルにある場合、フォーカスは移動しません。
- <kbd>End</kbd> <kbd>Control + End</kbd>
  - : フォーカスが行にある場合、フォーカスを最後の行に移動します。フォーカスが最後の行にある場合、フォーカスは移動しません。フォーカスがセルにある場合、フォーカスを行内の最後のセルに移動します。フォーカスが行の最後のセルにある場合、フォーカスは移動しません。すべての行が DOM に存在しない場合、これを使用して DOM に存在する最後の行にフォーカスするか、データベース全体が DOM に存在する場合に利用可能な最後の行にフォーカスできます。

ツリーグリッドがセル、行、または列の選択をサポートする場合、これらの機能には以下のキーが一般的に使用されます。

- <kbd>Control + Space</kbd>
  - : フォーカスが行にある場合、すべてのセルを選択します。フォーカスがセルにある場合、フォーカスを含む列を選択します。
- <kbd>Shift + Space</kbd>
  - : フォーカスが行にある場合、行を選択します。フォーカスがセルにある場合、フォーカスを含む行を選択します。ツリーグリッドに行を選択するためのチェックボックスを含む列がある場合、フォーカスがチェックボックスにない場合に、このキーをボックスをチェックするためのショートカットとしても使用できます。
- <kbd>Control + A</kbd>
  - : すべてのセルを選択します。
- <kbd>Shift + →</kbd>
  - : フォーカスがセルにある場合、選択を右に 1 セル拡張します。
- <kbd>Shift + ←</kbd>
  - : フォーカスがセルにある場合、選択を左に 1 セル拡張します。
- <kbd>Shift + ↓</kbd>
  - : フォーカスが行にある場合、選択を次の行のすべてのセルに拡張します。フォーカスがセルにある場合、選択を 1 セル下に拡張します。
- <kbd>Shift + ↑</kbd>
  - : フォーカスが行にある場合、選択を前の行のすべてのセルに拡張します。フォーカスがセルにある場合、選択を 1 セル上に拡張します。

ナビゲーション機能が DOM により多くの行や列を動的に追加できる場合、<kbd>Control + End</kbd> などのグリッドの開始または終了にフォーカスを移動するキーイベントは、バックエンドデータで利用可能な最後の行ではなく、DOM 内の最後の行にフォーカスを移動する可能性があります。

矢印キーなどのナビゲーションキーがセルからセルにフォーカスを移動している間、それらはコンボボックスを操作したり、セル内で編集カレットを移動したりするなどのことには利用できません。この機能が必要な場合は、[Editing and Navigating Inside a Cell](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside) を参照してください。

## アクセシビリティの懸念事項

スクリーンリーダーは、ユーザーがグリッドと対話する際、一般的にドキュメント読み取りモードではなくアプリケーション読み取りモードになるため、すべてのセルがキーボードフォーカスを受け取るか含むことができることが重要です。アプリケーションモードでは、スクリーンリーダーユーザーはフォーカス可能な要素とフォーカス可能な要素にラベルを付けるコンテンツのみを聞きます。コンテンツがフォーカスを受け取れない場合、スクリーンリーダーユーザーはツリーグリッドに含まれる要素を知らずに見落とす可能性があります。

## 仕様書

{{Specifications}}
