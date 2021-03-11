# Day 9 - Git credential

- save username and password
- git config --global credential.helper store
// not recommend (~/.git-credentials)
- git config --global credential.helper "cache --timeout=18000"