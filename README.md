# Available CPU

This project tries to find a safe cross-platform way of determining how many physical CPUs there are available in a CI environment. The intention is to use this in Jest to automatically select the most performant amount of workers to spawn

## Results

Results from running on different CIs are:

| CI                        | `cpus().length`      | `physical-cpu-count` | manual with `nproc`/`sysctl`/env | actual |
| ------------------------- | -------------------- | -------------------- | -------------------------------- | ------ |
| travis (linux)            | 32 :boom:            | 16 :boom:            | 2 :white_check_mark:             | 2      |
| travis (mac)              | 2 :white_check_mark: | 2 :white_check_mark: | 2 :white_check_mark:             | 2      |
| travis (windows)          | 2 :white_check_mark: | 1 :boom:             | 2 :white_check_mark:             | 2      |
| Circle                    | 32 :boom:            | 16 :boom:            | 32 :boom:                        | 2      |
| Appveyor                  | 2 :white_check_mark: | 1 :boom:             | 2 :white_check_mark:             | 2      |
| GitHub Actions (linux)    | 2 :white_check_mark: | 2 :white_check_mark: | 2 :white_check_mark:             | 2      |
| GitHub Actions (mac)      | 4 :white_check_mark: | 4 :white_check_mark: | 4 :white_check_mark:             | 4      |
| GitHub Actions (windows)  | 2 :white_check_mark: | 1 :boom:             | 2 :white_check_mark:             | 2      |
| Axure Pipelines (linux)   | 2 :white_check_mark: | 2 :white_check_mark: | 2 :white_check_mark:             | 2      |
| Axure Pipelines (mac)     | 4 :white_check_mark: | 4 :white_check_mark: | 4 :white_check_mark:             | 4      |
| Axure Pipelines (windows) | 2 :white_check_mark: | 1 :boom:             | 2 :white_check_mark:             | 2      |
