# Day 14 Resolve conflict using rebase
## when will conflicts happen?
- Changing the same file + same line
- A deleted file X, B modified file X
## Method 1 Using rebase
- 1. git checkout main
- 2. git pull
- 3. git checkout (feature/branch)
- 4. git rebase main
- 5. first git add
- 6. git rebase --continue
- 7. If error credential using: (git config --global credential.helper wincred)
- 8.  git push origin (feature/branch) -f

<<<<<<< HEAD
- => Update commit current not new commit
=======
>>>>>>> dca151a5d77e0cc4adebe7a7e5dc3b90009f10e4
- show config: git config --global --list
