# Day 15 Resolve conflict using merge

## when will conflicts happen?
- Changing the same file + same line
- A deleted file X, X modified file X
## Method 2 Using merge
- 1. Merge updated master to feature  branch (3-way merge)
- 2. Resolve conflict
- 3. Commit and push
## How to use
- git checkout master
- git pull
- git checkout feature/branch
- git merge main
- resolve problem
- git status
- git add
- git commit -m 'merge master'
- git push origin feature/branch

- => https://www.atlassian.com/git/tutorials/merging-vs-rebasing
