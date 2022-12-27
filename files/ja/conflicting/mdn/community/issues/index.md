---
title: GitHub 早見表
slug: conflicting/MDN/Community/Issues
original_slug: MDN/Contribute/GitHub_cheatsheet
---

{{MDNSidebar}}

この記事では、 MDN に協力するために [Git](https://git-scm.com/) と [GitHub](https://github.com/) を使用する際に必要となる基本的なコマンドのクイックリファレンスを提供します。これらのツールに慣れておらず、助けが必要な場合は、[全くの初心者のための GitHub](/ja/docs/MDN/Contribute/GitHub_beginners) チュートリアルで基本的なことを教えています。

## クローン

```bash
git clone the-repo-url
```

## リモートをセットアップ

```bash
git remote add remote-name repo-you-want-to-point-to
```

## リモートの一覧を表示

```bash
git remote -v
```

## リポジトリに変更を加える準備

### メインブランチに切り替え

```bash
git switch main
```

### メインブランチを更新

```bash
git fetch remote-name
git rebase remote-name/main
git push
```

## ブランチをローカルに取得して切り替える

```bash
git pull
git switch new-branch
```

## 最新のステータスを取得

```bash
git status
```

## 追加、コミット、変更をプッシュ

```bash
git add path-to-changed-file
git commit -m 'my commit message'
git push
```

## トラブルシューティング

### コミットリストに追加されていないファイルに加えた変更を元に戻す

```bash
git restore file-path
```

### コミットリストからファイルを削除

```bash
git restore --staged file-path
```

### 最後のコミットを取り消す

```bash
git reset HEAD~1
```

### リモートフォークにプッシュされたコミットを元に戻す

```bash
git revert HEAD
git push
```

> **メモ:** プルリクエストに入れたくないファイルを削除するには、 GitHub の UI を使う方法もあります。 github.com のプルリクエストのページに行き、 "Files changed" タブを開いてプルリクエストから削除したいファイルを探します。ページ内のファイルボックスの右上に「3 つの点」 (`...`) のメニューが表示されます。このボタンを押して "Delete file" を選択してください。確認ページでは、新しいコミットのタイトルを入力し、"Commit directly... " チェックボックスが選択されていることを確認して、"Commit changes" ボタンを押してください。

## もっと見たいですか？

この早見表にもっと多くのコマンドを載せるべきだと思われる場合は、 [issue を作成](https://github.com/mdn/content/issues/new)して提案してください。
