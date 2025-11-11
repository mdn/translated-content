---
title: Long task (ロングタスク)
slug: Glossary/Long_task
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{GlossarySidebar}}

**ロングタスク**とは、完了するまでに 50 ミリ秒以上かかるタスクです。

[メイン UI スレッド](/ja/docs/Glossary/Main_thread)が 50 ミリ秒以上ビジーである中断のない期間です。一般的な例では、長時間実行されるイベントハンドラー、高価な[リフロー](/ja/docs/Glossary/Reflow)、その他の再レンダリングが含まれ、50 ミリ秒を超えるイベントループの異なるターン間でブラウザーが実行する作業が含まれます。

## 関連情報

- [ロングタスク API](/ja/docs/Web/API/PerformanceLongTaskTiming)
- [ロングアニメーションフレーム API](/ja/docs/Web/API/Performance_API/Long_animation_frame_timing)
