workflow "Deploy on framation" {
  on = "push"
  resolves = ["master"]
}

action "Action: travis" {
  uses = "./actions/action-travis/"
}

action "Action: lint" {
  uses = "./actions/action-lint/"
}