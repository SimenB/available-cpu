# Available CPU

This project tries to find a safe cross-platform way of determining how many physical CPUs there are available in a CI environment. The intention is to use this in Jest to automatically select the most performant amount of workers to spawn

## Results

Results from running on different CIs are:

| CI             | `cpus().length` | `physical-cpu-count` | manual with `nproc`/`sysctl`/env |
| -------------- | --------------- | -------------------- | -------------------------------- |
| travis (linux) | 32              | 16                   | 2                                |
| travis (mac)   | 2               | 2                    | 2                                |
| Circle         | 32              | 16                   | 32                               |
| Appveyor       | 2               | 1                    | 2                                |
