### 指令
1. git log --oneline --graph --all <br>
显示所有分支的提交历史，以简洁的一行格式、图形化展示分支和合并情况

2. git log 默认展示的是当前分支的提交历史，不包括其他分支的提交。 <br>
常见 git log 命令及作用简短整理：
    * git log：查看详细提交历史。
    * git log --oneline：每条提交一行，简洁查看。
    * git log --graph：图形化显示分支合并历史。
    * git log --all：显示所有分支的提交记录。
    * git log --decorate：显示分支名、标签等装饰。
    * git log \<file>：查看某个文件的提交历史。

3. git status <br>
查看当前工作区和暂存区的状态，显示哪些文件被修改、添加或删除

4. git branch 只显示本地分支，
git branch -a 显示本地和远程所有分支。

5. git show \<commit-hash> 展示某次提交的具体内容(显示某次提交的详细信息，包括提交信息、变更内容（diff）等) <br>
单git show 默认是当前分支的最新提交 即HEAD


### 冲突
1. Git用特殊标记显示了冲突：
    - <<<<<<< HEAD - 当前分支（develop）的内容
    - ======= - 分隔线
    - \>>>>>>> feature/utils-enhancement - 要合并分支的内容