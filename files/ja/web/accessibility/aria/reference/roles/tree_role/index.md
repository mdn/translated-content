---
title: "ARIA: tree ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`tree` は、ユーザーが階層的に整理されたコレクションから 1 つ以上のアイテムを選択できるウィジェットです。

## 説明

`tree` ウィジェットは、展開および折りたたみ可能な親ノードと子ノードを持つ階層リストです。階層内の任意のアイテムは、[`role="treeitem"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) で設定された子ツリーアイテムを持つことができます。子を持つツリーアイテムは展開または折りたたみできて、その子を表示または非表示にします。

`tree` の例は、ファイルシステム選択ユーザーインターフェイスです。フォルダーとファイルを表示するツリービューです。フォルダーアイテムは展開してフォルダーのコンテンツ（ファイル、フォルダー、またはその両方）を表示し、折りたたんでそのコンテンツを隠すことができます。

ARIA ツリービューは、<kbd>Tab</kbd> ではなく主にキーボードの矢印キーでナビゲートされます。この形式のナビゲーションは、ほとんどのブラウザーコンテンツでは一般的ではありませんが、ネイティブアプリケーションでは普通で期待されるものです。このため、ツリービューを作成する前に、必要な機能に対処する代替オプションを検討してください。

> [!WARNING]
> ツリービューは、ウェブアプリケーションよりもネイティブアプリケーションに似たナビゲーションを使用します。このため、ツリービューを作成する前に、必要な機能に対処する代替オプションを検討してください。

### 単一選択および複数選択のツリー

ツリーは「単一選択」にして、ユーザーがアクションのために 1 つのアイテムのみを選択できるようにしたり、「複数選択」にして、ユーザーがアクションのために複数のアイテムを選択できるようにしたりできます。複数選択ツリーでは、`tree` は [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) が true に設定されています。それ以外の場合、`aria-multiselectable` は `false` に設定されているか、デフォルト値の `false` が暗示されます。どちらの場合でも、キーボードアクセシブルにするために、すべてのツリーの子孫に対してフォーカスを管理する必要があります。

単一選択ツリーの一部の実装では、フォーカスされたアイテムが選択状態も持ちます。これは「選択がフォーカスに従う」として知られています。単一選択ツリーがフォーカスを受け取る際、ツリーがフォーカスを受け取る前にツリーアイテムが選択されていない場合、フォーカスは最初のノードに設定されます。ツリーがフォーカスを受け取る前にツリーアイテムが選択されている場合、フォーカスは選択されたツリーアイテムに設定されます。単一選択ツリーでは、選択されたツリーアイテムに [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) が `true` に設定され、ツリー内の他のツリーアイテムには存在しません。

複数選択ツリーでは、選択されたすべてのツリーアイテムに `aria-selected="true"` が設定され、選択可能だが現在選択されていないすべてのツリーアイテムノードに `aria-selected="false"` が設定されています。選択できないツリーアイテムには `aria-selected` 属性を含めないでください。

複数選択ツリーがフォーカスを受け取る際、ツリーがフォーカスを受け取る前にツリーアイテムが選択されていない場合、フォーカスは最初のツリーアイテムに設定されます。ツリーがフォーカスを受け取る前に 1 つ以上のツリーアイテムが選択されている場合、フォーカスは最初に選択されたノードに設定されます。

複数選択ツリーでは、選択状態は常にフォーカスとは独立しています。例えば、典型的なファイルシステムナビゲーターでは、ユーザーはフォーカスを移動して、コピーや移動などのアクションのために任意の数のファイルを選択できます。視覚的なデザインでは、どのアイテムが選択されているか、どのアイテムがフォーカスを持っているかを明確にする必要があります。

### ツリー階層

ツリービューでは、`tree` ノードがルートノードです。子、孫、およびさらなる子孫 `treeitem` ノードを持つことができます。

ツリーノードとして機能する各要素は、ルートツリーノード（`tree` のロールを持つ）を除いて、`treeitem` ロールを持ちます。`tree` は親 `tree` ノードを持ちません - それはルートノードです。ノードがツリーにネストされており、かつ子孫ツリーアイテムを持つ場合、それは `treeitem` ロールと [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性を持ちます。ノードが閉じた状態の場合は `aria-expanded="false"` が設定され、ノードが開いた状態の場合は `aria-expanded="true"` が設定されます。

`treeitem` ノードは、`tree` ルートノードの直接の子にしたり、`treeitem` ノード内にネストしたり、または [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) 要素内にオプションでネストしたりできます。`tree` 内にネストされた `group` は、treeitem 要素の展開可能なコレクションです。

終端ノード（ツリーアイテムの子を持たないもの）には `aria-expanded` を含めないでください。支援技術に対してノードが親ノードであると誤って説明することになるためです。

### DOM 配置と存在

すべてのツリーアイテムは、`tree` ロールを持つ要素に含まれているか、またはそれによって所有されています。マークアップで `tree` の直接の子孫でないツリーアイテムがある場合は、コンテナーの DOM の子でない要素を含めるために、所有するツリーコンテナーに [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) を含めてください。これらの子でない所有要素は、参照される順序で読み取り順序に表示され、DOM の子であるツリーアイテムの後に表示されます。フォーカスを管理するスクリプトは、視覚的なフォーカス順序がこの支援技術の読み取り順序と一致することを確認する必要があります。

ユーザーがツリー内でフォーカスを移動したりツリーをスクロールしたりする際の動的読み込みのために、利用可能なノードの完全なセットが DOM に存在しない場合、各ノードには [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) 、 [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) 、および [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) が指定されています。

### アクセシブル名

`tree` にはアクセシブル名を提供する必要があります。[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) で参照される可視ラベルを参照するか、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) でラベルを指定してください。

### メニューの方向

`tree` ロールを持つ要素は、暗黙的な [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) 値として vertical を持ちます。ツリー要素が水平方向の場合は、`aria-orientation="horizontal"` を含めてください。

### 関連する WAI-ARIA ロール、状態、プロパティ

- [`role="treeitem"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : ツリー内のアイテムです。
- [`role="group"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : ツリーアイテムの展開可能なコレクションです。
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : 可視ラベルが存在する場合に必要なアクセシブル名を提供して、`tree` にラベルを付ける要素を識別します。それ以外の場合は `aria-label` を使用してください。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : 可視ラベルが存在しない場合に `tree` にラベルを付ける文字列値を定義します。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : ツリーの方向が水平か垂直かを示します。省略した場合のデフォルトは `vertical` です。
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : true に設定した場合、ユーザーがツリーの現在選択可能な子孫から複数のツリーアイテムを選択できることを示します。

### キーボードインタラクション

デフォルトの向きである垂直方向の `tree` の場合：

<table>
<tr>
<td><kbd>→</kbd></td>
<td>
<ul>
<li>フォーカスが閉じたノードにある場合、ノードを開きます。フォーカスは移動しません。
<li>フォーカスが開いたノードにある場合、フォーカスを最初の子ノードに移動します。
<li>フォーカスが終端ノード（子を持たないツリーアイテム）にある場合、何もしません。
</td>
</tr>
<tr>
<td><kbd>←</kbd></td>
<td>
<ul>
<li>フォーカスが開いたノードにある場合、ノードを閉じます。
<li>フォーカスが終端ノードまたは閉じたノードでもある子ノードにある場合、フォーカスをその親ノードに移動します。
<li>フォーカスが閉じたツリーにある場合、何もしません。
</td>
</tr>
<tr>
<td><kbd>↓</kbd></td>
<td> ノードを開いたり閉じたりすることなく、フォーカス可能な次のノードにフォーカスを移動します。
</td>
</tr>
<tr>
<td><kbd>↑</kbd></td>
<td> ノードを開いたり閉じたりすることなく、フォーカス可能な前のノードにフォーカスを移動します。
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> ノードを開いたり閉じたりすることなく、ツリーの最初のノードにフォーカスを移動します。
</td>
</tr>
<tr>
<td><kbd>End</kbd></td>
<td> ノードを開くことなく、ツリーのフォーカス可能な最後のノードにフォーカスを移動します。
</td>
</tr>
<tr>
<td><kbd>Enter</kbd></td>
<td>現在フォーカスされているノードのデフォルトアクションを実行します。親ノードの場合、ノードを開いたり閉じたりします。単一選択ツリーで、ノードに子がない場合、まだ選択されていない場合は現在のノードを選択します（これがデフォルトアクションです）。
</td>
</tr>
<tr>
<td>文字を入力*</td>
<td>
<ul>
<li>フォーカスは、入力された文字で始まる名前を持つ次のノードに移動します。
<li>複数の文字が連続して素早く入力された場合、フォーカスは入力された文字列で始まる名前を持つ次のノードに移動します。
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> （オプション）</td>
<td> 現在のノードと同じレベルにあるすべての兄弟を展開します。
</td>
</tr>
</table>

\* タイプアヘッドは、特に 7 つ以上のルートノードを持つツリーの場合、すべてのツリーに推奨されます

### 複数選択のキーボードインタラクション

複数選択ツリーには 2 つのインタラクションモデルがあります。選択状態を失わないようにリストをナビゲートする際に <kbd>Shift</kbd> や <kbd>Control</kbd> などの修飾キーを押すことをユーザーに要求することもできますが、修飾キーを保持することをユーザーに要求しないモデルが推奨されます。

#### 推奨される複数ユーザー選択モデル

<table>
<tr>
<td><kbd>Space</kbd></td>
<td> フォーカスされたノードの選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Shift + ↓</kbd> （オプション）</td>
<td> フォーカスを次のノードに移動し、その選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Shift + ↑</kbd> （オプション）</td>
<td> フォーカスを前のノードに移動し、その選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Shift + Space</kbd> （オプション）</td>
<td> 最近選択されたノードから現在のノードまでの連続するノードを選択します。
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> （オプション）</td>
<td> フォーカスを持つノードと最初のノードまでのすべてのノードを選択します。オプションで、フォーカスを最初のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + Shift + End</kbd> （オプション）</td>
<td> フォーカスを持つノードと最後のノードまでのすべてのノードを選択します。オプションで、フォーカスを最後のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> （オプション）</td>
<td> ツリー内のすべてのノードを選択します。オプションで、すべてのノードが選択されている場合、すべてのノードの選択を解除することもできます。</td>
</tr>
</table>

#### 代替の複数選択モデル

代替の複数選択モデルは修飾キーモデルで、<kbd>Shift</kbd> や <kbd>Control</kbd> などの修飾キーを保持せずにフォーカスを移動すると、フォーカスされたノード以外のすべての選択されたノードの選択が解除されます：

<table>
<tr>
<td><kbd>Shift + ↓</kbd></td>
<td> フォーカスを次のノードに移動し、その選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Shift + ↑</kbd></td>
<td> フォーカスを前のノードに移動し、その選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Control + ↓</kbd></td>
<td> 選択状態を変更せずに、フォーカスを次のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + ↑</kbd></td>
<td> 選択状態を変更せずに、フォーカスを前のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + Space</kbd></td>
<td> フォーカスされたノードの選択状態を切り替えます。
</td>
</tr>
<tr>
<td><kbd>Shift + Space</kbd> （オプション）</td>
<td> 最も最近選択されたノードから現在のノードまでの連続するノードを選択します。
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> （オプション）</td>
<td> フォーカスを持つノードと最初のノードまでのすべてのノードを選択します。オプションで、フォーカスを最初のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + Shift + End</kbd> （オプション）</td>
<td> フォーカスを持つノードと最後のノードまでのすべてのノードを選択します。オプションで、フォーカスを最後のノードに移動します。
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> （オプション）</td>
<td> ツリー内のすべてのノードを選択します。オプションで、すべてのノードが選択されている場合、すべてのノードの選択を解除することもできます。
</td>
</tr>
</table>

## 仕様書

{{Specifications}}
