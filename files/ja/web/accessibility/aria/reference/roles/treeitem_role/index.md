---
title: "ARIA: treeitem ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/treeitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`treeitem` は `tree` 内のアイテムです。

## 説明

[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) は、展開および折りたたみ可能な親ノードと子ノードを持つ階層リストです。`treeitem` は `tree` 内のノードです。ツリーのルートは `tree` ですが、すべてのツリーノードは、それ自体がネストされた `treeitem` ノードを持つ場合でも、`treeitem` 要素です。

`tree` の例は、ファイルシステム選択ユーザーインターフェイスです。フォルダーとファイルを表示するツリービューです。各フォルダーとファイルは `treeitem` です。フォルダーアイテムは `treeitem` 要素で、展開してフォルダーのコンテンツ（ファイル、フォルダー、またはその両方で、すべて `treeitems` です）を表示し、折りたたんでそのコンテンツを隠すことができます。

ツリー階層では、 _ルートノード_ は `tree` ロールを持ちます。ルートノード以外のすべての他のノードは、子を持つかどうかに関係なく、`treeitem` のロールを持ちます。親である `treeitem` は **親ノード** です。親でない `treeitem` は _終端ノード_ です。

子を持つツリーアイテムは展開または折りたたみできて、その子を表示または非表示にします。子ノードが表示されるように展開された親ノードは **開いたノード** です。子ノードが表示されないように折りたたまれた親ノードは **閉じたノード** です。

各親ノードには、[`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロールを持つ要素が含まれているか、またはそれによって所有されています。親ノードは `treeitem` 要素の展開可能なコレクションです。これらの子ノードは親ノードの直接の子孫ではありません。むしろ、`group` ロールを持つ要素に囲まれている必要があります。

各親ノードには [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性を含める必要があります。これは閉じている場合は `false` に、開いている場合は `true` に設定されます。終端ノードには `aria-expanded` 属性を含めるべきではありません。この属性の存在は、ノードが親であることを支援技術に示すためです。

> [!NOTE]
> ARIA ツリービューは、ウェブアプリケーションよりもネイティブアプリケーションに似たナビゲーションを使用し、<kbd>Tab</kbd> ではなく主にキーボードの矢印キーでナビゲートされます。この形式のナビゲーションは、ほとんどのブラウザーコンテンツでは一般的ではありませんが、ネイティブアプリケーションでは普通で期待されるものです。このため、ツリービューを作成する前に、必要な機能に対処する代替オプションを検討してください。

`treeitem` ロールを持つ要素は、`tree` ロールを持つ要素内にネストされているか、またはそれによって所有されている必要があります。ツリーアイテムは、`tree`、`treeitem`、または `tree` もしくは `treeitem` ロールを持つ要素に含まれているか所有されている `group` ロールを持つ要素の子にすることができます。`treeitem` が `tree` 内にネストされていない場合、または `tree` によって所有されている `group` 内にネストされていない場合は、所有する `tree`、`treeitem` または `group` 要素の [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性値に `treeitem` の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を含めてください。

ツリーは「単一選択」にして、ユーザーがアクションのために 1 つの `treeitem` のみを選択できるようにしたり、「複数選択」にして、ユーザーがアクションのために複数の `treeitem` ノードを選択できるようにしたりできます。どちらの場合でも、キーボードアクセシブルにするために、すべてのツリーの子孫に対してフォーカスを管理する必要があります。

単一選択ツリーでは、1 つの treeitem のみが [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) （または [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)）を `true` に設定できます。単一選択ツリーがフォーカスを受け取る際、ツリーがフォーカスを受け取る前に `treeitem` が選択されていない場合、フォーカスは最初の `treeitem` に設定されます。ツリーがフォーカスを受け取る前に `treeitem` が選択されている場合、フォーカスは `aria-selected="true"` が設定されている単一の `treeitem` に設定されます。

選択可能だが選択されていないすべてのノードは、`aria-selected` または `aria-checked` が `false` に設定されています。ツリーに選択できないノードが含まれている場合は、`aria-selected` または `aria-checked` のいずれも含めないでください。これらの属性のいずれかが存在することは、ノードが選択可能であることを支援技術に示すためです。

`tree` ノードに [`aria-multiselectable="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) が設定されていない限り、一度に選択できるノードは 1 つだけです。

複数選択ツリーがフォーカスを受け取る際、ツリーがフォーカスを受け取る前にツリーアイテムが選択されていない場合、フォーカスは最初の `treeitem` に設定されます。ツリーがフォーカスを受け取る前に 1 つ以上のツリーアイテムが選択されている場合、フォーカスは最初に選択されている `treeitem` に設定されます。

複数選択ツリーでは、選択されたすべてのツリーアイテムに `aria-selected="true"`（または `aria-checked="true"`）が設定されています。選択可能だが現在選択されていないすべてのツリーアイテムノードには、`aria-selected="false"`（または `aria-checked="false"`）が設定されている必要があります。

`aria-selected` または `aria-checked` のいずれかを使用して、`treeitem` 要素の選択を示すことができます。一部のユーザーインターフェイスでは、単一選択ツリーでは `aria-selected` で選択を示し、複数選択ツリーでは `aria-checked` で選択を示します。

同じ `tree` で `aria-selected` と `aria-checked` の両方を使用することは強く推奨されません。`aria-selected` の意味と目的が `aria-checked` の意味と目的と異なり、各状態の意味と目的が明確で、ユーザーインターフェイスが各状態を制御する別々の方法を提供している場合を除き、単一のツリーのツリーアイテムで `aria-selected` と `aria-checked` の両方を使用しないでください。

複数選択ツリーでは、選択状態はフォーカスとは独立している必要があります。例えば、典型的なファイルシステムナビゲーターでは、ユーザーはフォーカスを移動して、コピーや移動などのアクションのために任意の数のファイルを選択できます。視覚的なデザインでは、どのアイテムが選択されているか、どのアイテムがフォーカスを持っているかを明確にする必要があります。

ユーザーがツリー内でフォーカスを移動したりツリーをスクロールしたりする際の動的読み込みのために、利用可能なツリーアイテムの完全なセットが DOM に存在しない場合、各 `treeitem` には [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)、[`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)、および [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) を指定する必要があります。

`treeitem` にはアクセシブル名が必要です。一般的に、その名前は `treeitem` のコンテンツから来ます。アクセシブル名は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を介して設定することもできます。

### 関連する WAI-ARIA ロール、状態、プロパティ

- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ロール
  - : 展開および折りたたみ可能な親と子 `treeitem` ノードの階層リストのルートノードです
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : `treeitem` 子ノードのセットを識別します。
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : `treeitem` ノードの親である、ルート `tree` および `group` ノードに設定され、ツリービューが展開されている（`true`）か折りたたまれている（`false`）かを示します。
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : `true` または `false` に設定され、`treeitem` が選択可能であることと、現在選択されているかどうかを示します。
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : `true` または `false` に設定され、`treeitem` がチェック可能であることと、現在チェックされているかどうかを示します。

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

## 例

以下は、ウェブ開発コースのディレクトリーリストをツリービューとしてマークアップする方法の例です：

```html
<div>
  <h3 id="treeLabel">Developer Learning Path</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Languages</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group">
                <li role="treeitem">Document structure</li>
                <li role="treeitem">Head elements</li>
                <li role="treeitem">Semantic elements</li>
                <li role="treeitem">Attributes</li>
                <li role="treeitem">Web forms</li>
              </ul>
            </li>
            <li role="treeitem">CSS</li>
            <li role="treeitem">JavaScript</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Accessibility</span>
          <ul role="group">
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Web Performance</span>
          <ul role="group">
            <li role="treeitem">Load time</li>
          </ul>
        </li>
        <li role="treeitem">APIs</li>
      </ul>
    </li>
  </ul>
</div>
```

上記はツリービューのセマンティクスを提供しますが、インタラクティビティは提供しません。それは JavaScript で追加する必要があります。

ツリーアイテムがデフォルトでフォーカス可能でない場合、JavaScript を使用して、ユーザーがツリーにタブで移動する際にフォーカスを受け取るべきものに `tabIndex="0"` を設定する必要があり、それ以外のすべてのツリーアイテムに [`tabIndex="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を設定します。

キーボードインタラクションのすべてのキーボード機能とすべてのポインターイベントは、フォーカス管理、ツリーの上下移動、親ノードの展開と折りたたみ、選択管理を含めて、プログラムする必要があります。

ツリーに 7 つ以上のツリーアイテムがある場合、タイプアヘッド機能を含めることが推奨されます。

## 仕様書

{{Specifications}}
