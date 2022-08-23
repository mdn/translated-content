---
title: GitHub 早見表
slug: conflicting/MDN/Community/Issues
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Cheatsheet
  - Commands
original_slug: MDN/Contribute/GitHub_cheatsheet
---
<p>{{MDNSidebar}}</p>

<p>この記事では、 MDN に協力するために <a href="https://git-scm.com/">Git</a> と <a href="https://github.com/">GitHub</a> を使用する際に必要となる基本的なコマンドのクイックリファレンスを提供します。これらのツールに慣れておらず、助けが必要な場合は、<a href="/ja/docs/MDN/Contribute/GitHub_beginners">全くの初心者のための GitHub</a> チュートリアルで基本的なことを教えています。</p>

<h2 id="Cloning">クローン</h2>

<pre class="brush: bash">git clone <em>the-repo-url</em></pre>

<h2 id="setting_up_a_remote">リモートをセットアップ</h2>

<pre class="brush: bash">git remote add <em>remote-name</em> <em>repo-you-want-to-point-to</em></pre>

<h2 id="view_remotes_list">リモートの一覧を表示</h2>

<pre class="brush: bash">git remote -v</pre>

<h2 id="preparing_to_make_a_change_to_the_repo">リポジトリに変更を加える準備</h2>

<h3 id="switch_to_the_main_branch">メインブランチに切り替え</h3>

<pre class="brush: bash">git switch main</pre>

<h3 id="update_your_main_branch">メインブランチを更新</h3>

<pre class="brush: bash">git fetch <em>remote-name</em>
git rebase <em>remote-name</em>/main
git push</pre>

<h2 id="get_your_branch_locally_and_switch_to_it">ブランチをローカルに取得して切り替える</h2>

<pre class="brush: bash">git pull
git switch new-branch</pre>

<h2 id="get_latest_status">最新のステータスを取得</h2>

<pre class="brush: bash">git status</pre>

<h2 id="adding_committing_and_pushing_changes">追加、コミット、変更をプッシュ</h2>

<pre class="brush: bash">git add path-to-changed-file
git commit -m 'my commit message'
git push</pre>

<h2 id="troubleshooting">トラブルシューティング</h2>

<h3 id="reverting_a_change_you_made_to_a_file_that_you_havent_yet_added_to_the_commit_list">コミットリストに追加されていないファイルに加えた変更を元に戻す</h3>

<pre class="brush: bash">git restore <em>file-path</em></pre>

<h3 id="removing_a_file_from_the_commit_list">コミットリストからファイルを削除</h3>

<pre class="brush: bash">git restore --staged <em>file-path</em></pre>

<h3 id="reversing_a_commit">最後のコミットを取り消す</h3>

<pre class="brush: bash">git reset HEAD~1</pre>

<h3 id="reversing_a_commit_that_has_been_pushed_to_the_remote_fork">リモートフォークにプッシュされたコミットを元に戻す</h3>

<pre class="brush: bash">git revert HEAD
git push</pre>

<div class="note notecard">
  <h4>Note</h4>
  <p>プルリクエストに入れたくないファイルを削除するには、 GitHub の UI を使う方法もあります。 github.com のプルリクエストのページに行き、 "Files changed" タブを開いてプルリクエストから削除したいファイルを探します。ページ内のファイルボックスの右上に「3つの点」 (<code>...</code>) のメニューが表示されます。このボタンを押して "Delete file" を選択してください。確認ページでは、新しいコミットのタイトルを入力し、"Commit directly... " チェックボックスが選択されていることを確認して、"Commit changes" ボタンを押してください。</p>
</div>

<h2 id="want_to_see_more">もっと見たいですか？</h2>

<p>この早見表にもっと多くのコマンドを載せるべきだと思われる場合は、 <a href="https://github.com/mdn/content/issues/new">issue を作成</a>して提案してください。</p>
