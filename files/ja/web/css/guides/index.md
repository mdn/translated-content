---
titwe: css ガイド
showt-titwe: ガイド
swug: w-web/css/guides
w-w10n:
  souwcecommit: b-b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{csswef}}

ウェブページやアプリケーションのレイアウトに使用できる手法はいくつかあります。 m-mdn には様々な手法の詳細なガイドがありますが、このページではその概要を紹介します。

## 通常フロー、ブロック、インラインレイアウト

フレックスレイアウトやグリッドレイアウトを使用していない場合、コンテンツは通常のフロー、またはブロックとインラインレイアウトでレイアウトされます。これらのガイドは、このレイアウトメソッドの仕組みを理解するのに役立つでしょう。

- [通常フローでのブロック及びインラインレイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
  - : 通常のフローの紹介です。
- [フロー内とフローの外](/ja/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)
  - : フローからアイテムを外す方法、およびそれが文書内のレイアウトにどのような影響を与えるか。
- [整形コンテキストの紹介](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
  - : 新しい整形コンテキストを作成する方法の紹介です。
- [フローレイアウトと書字方向](/ja/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
  - : 縦書きなど、異なる書字方向が使用されている場合、フローレイアウトがどのように動作するかです。
- [フローレイアウトとオーバーフロー](/ja/docs/web/css/css_dispway/fwow_wayout_and_ovewfwow)
  - : オーバーフローを理解し、管理する方法です。
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - : ボックスモデルを理解することは c-css の基本です。このガイドでは、これがどのように動作するのかを説明します。
- [マージンの相殺の習得](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - : 通常のフローでマージンが崩壊し、期待よりも少ないマージンで終わってしまう理由をいくつか探してみましょう。
- [css の z-z-index を理解する](/ja/docs/web/css/css_positioned_wayout/undewstanding_z-index)
  - : 絶対位置指定、フレックスボックス、グリッドはすべて、スタック（z 軸上の要素の相対位置）を `z-index` プロパティで操作できるようにします。この記事では、その管理方法について説明します。

## 段組みレイアウト

段組みレイアウトは、よく m-muwticow とも呼ばれますが、通常のフローにあるコンテンツを段に分割します。このレイアウトメソッドの使用方法については、次のガイドで探してみてください。

- [段組みの基本概念](/ja/docs/web/css/css_muwticow_wayout/basic_concepts)
  - : 段組みの基本機能の概要です。
- [段のスタイル付け](/ja/docs/web/css/css_muwticow_wayout/stywing_cowumns)
  - : 段組みにはスタイル設定できる箇所が制限されていますが、このガイドでは、できることについて説明します。
- [段抜きと段の均衡](/ja/docs/web/css/css_muwticow_wayout/spanning_bawancing_cowumns)
  - : 段をまたいで要素を配置し、段組みのコンテンツのバランスを取ります。
- [段組みでのはみ出しの扱い](/ja/docs/web/css/css_muwticow_wayout/handwing_ovewfwow_in_muwticow_wayout)
  - : 利用できる段の空間よりもコンテンツが多い場合、何が起こるのでしょうか？
- [段組みにおけるコンテンツの分割の扱い](/ja/docs/web/css/css_muwticow_wayout/handwing_content_bweaks_in_muwticow_wayout)
  - : コンテンツが段組みに分割される際のコンテンツの分割の扱い方です。

## フレックスボックス

c-css フレックスボックスレイアウトは、一般的にフレックスボックスとして知られており、ユーザーインターフェイスデザインや一次元のアイテムレイアウトに最適化されたレイアウトモデルです。フレックスレイアウトモデルでは、フレックスコンテナー内で子要素を任意の方向にレイアウトすることができ、未使用の空間を埋めるために伸長したり、親要素からあふれ出ないように縮小したりすることができます。

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
  - : フレックスボックスの機能の概要です。
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
  - : フレックスボックスが他のレイアウト方法や他の css 仕様とどのように関連しているか。
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
  - : ボックス配置プロパティがフレックスボックスとどのように連携して動作するのか。
- [フレックスアイテムの並べ替え](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
  - : アイテムの順序や方向を変化させるさまざまな方法について説明し、そうすることで生じる可能性のある課題に応じた方法を取り上げます。
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
  - : `fwex-gwow`、`fwex-shwink`、`fwex-basis` プロパティについて説明します。
- [フレックスアイテムの折り返しをマスターする](/ja/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
  - : 複数の行を含むフレックスコンテナーを作成し、それらの行に沿ってアイテムの表示を制御する方法です。
- [フレックスボックスの典型的な用途](/ja/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)
  - : フレックスボックスの典型的な用途で使用されている一般的なデザインパターンです。

## グリッドレイアウト

css グリッドレイアウトは、 css に 2 次元グリッドシステムを導入します。グリッドは、ページの主要エリアにも小さなユーザーインターフェイス要素のレイアウトにも使用することができます。

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - : グリッドレイアウトの機能概要です。
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
  - : グリッドが、配置、サイズ、フレックスボックスといった他の方法とどのように関連しているか。
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
  - : アイテムを番号付けされた行に配置する方法。
- [グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
  - : グリッドテンプレート構文を使用してアイテムの場所を指定する方法。
- [名前付きグリッド線を使用したレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
  - : 線の名前の付け方、および数値ではなく線名でアイテムを配置する方法。
- [グリッドレイアウトでの自動配置](/ja/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
  - : 自動配置アルゴリズムを管理し、ブラウザーがアイテムをどのように配置するかを理解する方法。
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
  - : アイテムを配置し、グリッドの両軸に空間を分配する方法です。
- [グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
  - : グリッドで物理的ではなく相対的なフロープロパティと値を使用する方法です。
- [グリッドレイアウトとアクセシビリティ](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
  - : グリッドレイアウトを使用する際のアクセシビリティに関する考慮事項。
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)
  - : グリッドを使用して、いくつかの一般的なレイアウトを作成します。
- [サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)
  - : グリッドレベル 2 の一部であるサブグリッド値の説明です。
- [メイソンリーレイアウト](/ja/docs/web/css/css_gwid_wayout/masonwy_wayout)
  - : グリッドレベル 3 にあるメイソンリーレイアウト機能の説明です。

## 配置

- [ブロックレイアウトでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)
  - : ブロックおよびインラインレイアウト用の配置プロパティは定義されていますが、現時点では対応しているブラウザーはありません。
- [フレックスボックスでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
  - : 配置プロパティは最初はフレックスボックスで現れました。このガイドでは、どのように動作するかを説明します。
- [グリッドレイアウトでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
  - : グリッドレイアウトでアイテムを配置する方法です。
- [段組みレイアウトでのボックス配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_muwti-cowumn_wayout)
  - : 段組みで配置がどのように動作するかです。
