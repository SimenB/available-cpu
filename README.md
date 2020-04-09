# Available CPU

This project tries to find a safe cross-platform way of determining how many physical CPUs there are available in a CI environment. The intention is to use this in Jest to automatically select the most performant amount of workers to spawn

## Results

Results from running on different CIs are:

| CI                        | `cpus().length` | `physical-cpu-count` | manual with `nproc`/`sysctl`/env | actual |
| ------------------------- | --------------- | -------------------- | -------------------------------- | ------ |
| travis (linux)            | 32              | 16                   | 2                                | 2      |
| travis (mac)              | 2               | 2                    | 2                                | 2      |
| travis (windows)          | 2               | 1                    | 2                                | 2      |
| Circle                    | 32              | 16                   | 32                               | 2      |
| Appveyor                  | 2               | 1                    | 2                                | 2      |
| GitHub Actions (linux)    | 2               | 2                    | 2                                | 2      |
| GitHub Actions (mac)      | 4               | 4                    | 4                                | 4      |
| GitHub Actions (windows)  | 2               | 1                    | 2                                | 2      |
| Axure Pipelines (linux)   | 2               | 2                    | 2                                | 2      |
| Axure Pipelines (mac)     | 4               | 4                    | 4                                | 4      |
| Axure Pipelines (windows) | 2               | 1                    | 2                                | 2      |
