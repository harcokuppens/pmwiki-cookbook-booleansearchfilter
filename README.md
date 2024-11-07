# Basic PmWiki for developing cookbook scripts.

<!--ts-->
<!-- prettier-ignore -->
   * [Description](#description)
   * [Requirements](#requirements)
   * [PmWiki Credentials](#pmwiki-credentials)
   * [Getting started with just wiki](#getting-started-with-just-wiki)
   * [Getting started with a wiki for developing a cookbook script](#getting-started-with-a-wiki-for-developing-a-cookbook-script)
   * [Local folders binded into container](#local-folders-binded-into-container)
   * [Open bash shell in container](#open-bash-shell-in-container)
   * [View logs](#view-logs)
   * [Opening devcontainer with vscode](#opening-devcontainer-with-vscode)
   * [Helper scripts](#helper-scripts)
   * [Container configuration files](#container-configuration-files)
   * [What does cookbook setup script do?](#what-does-cookbook-setup-script-do)
   * [Revert setup to original git files](#revert-setup-to-original-git-files)
<!--te-->

## Description

This repository defines a basic pmwiki installation in devcontainer which you can use
to develop or test either

- a wiki
- a cookbook script

In latter case this repository can be used as an base to publish your cookbook script
with example pages. This allows you to directly view the cookbook in action using
docker compose.

## Requirements

To run the devcontainer you need installed

- [Docker](https://www.docker.com)
- `bash` shell with `envsubst` command

Linux and Macos by default come with a bash shell. However Macos ships with an very
old dated version of bash, so it is advised to install a more modern bash with
homebrew. For Windows machines you can used the "Git Bash" program which gets
installed with ["Git for Windows"](https://gitforwindows.org).

For the `envsubst` command

- for Macos(using brew package manager)/Linux(using apt package manager) install the
  gettext package.
- for windows the "Git Bash" shell has by default `envsubst` installed.

## PmWiki Credentials

PmWiki allows you to login as an user to edit pages or do any online configuration.

By default we already configured two accounts in `data/local/config.php`:

- a test user which can edit pages:
  - username: testuser
  - password: testuser
- an administrator account which has all rights:
  - username: admin
  - password: admin

## Getting started with just wiki

To just run the container with the wiki you can run it directly with docker compose:

     docker compose  -f .devcontainer/docker-compose.yml  up -d

This command causes the pmwiki container to be build and launched. For opening the
container with vscode see the section
[Opening devcontainer with vscode](#opening-devcontainer-with-vscode).

Then open in browser:

     https://localhost:8080
              or
     https://localhost:8443

## Getting started with a wiki for developing a cookbook script

If you want to develop a cookbook script the following steps gives you a good
development environment in a devcontainer which you can also publish to demonstrate
the cookbook:

1.  edit configuration in .

        .devcontainer/config.bash

    Change here the name of the cookbook, and the cookbook's repository url where you
    are going to store the cookbook's files. We use the pmwiki-base repo as base repo
    for the cookbook's repository.

2.  then generate directories, container setup files, and wiki pages for the cookbook
    by running

        .devcontainer/setup

3.  now we can run the container with

        docker compose  -f .devcontainer/docker-compose.yml  up -d

    This command causes the pmwiki container to be build and launched. For opening
    the container with vscode see the section
    [Opening devcontainer with vscode](#opening-devcontainer-with-vscode).

4.  Then open in browser:

        https://localhost:8080
                  or
        https://localhost:8443

Note that everything related to the devcontainer is within the `.devcontainer/`
folder, giving a clean separation between devcontainer and your cookbook files.

The `setup` script changed files in the repository to create a new project
focusing  on the specific cookbook of the project. For example it generates
a new  README.md file at the root of the project to describe the cookbook
and how to use and develop in it. All technical instructions are already in the 
README.md file. The developer only needs to add the  description of the cookbook
and its usage details.

When done developing the cookbook then you could commit the source files
in the current project to an own repository dedicated to the cookbook. A good example
where we also did this is [the ImagePopup cookbook repository](https://github.com/harcokuppens/pmwiki-cookbook-imagepopup/).

## Local folders binded into container

Mount binding lets you conveniently edit files locally on your docker host, and lets
you persist these folders when the container is restarted from scratch.

The following folders will be binded into the container:

- `wiki.d` for wiki pages
- `uploads`: for attachments/pictures in pages
- `local`: for the `local.php` configuration file
- `cookbook/${CONFIG_COOKBOOK}`: for binding only my cookbook's `php` script(s)
- `pub/${CONFIG_COOKBOOK}`: for binding only my cookbook's `pub` file(s)

The last two are only bounded when you have run the cookbook setup. Only the cookbook
subdirectory is mounted, because as developer you are only interested in that
specific cookbook. Next to that the `pub/` directory also containers files installed
by pmwiki which you do not want to mess with.

## Open bash shell in container

Because the `docker exec` command by default uses the user defined in `Dockerfile` or
`docker-compose.yml` the following command will open a bash shell with the `root`
user:

    docker exec -it pmwiki-base-ctr bash

However, the apache server and php code engine will operate using the `www-data`
user. Hence, when editing via a bash shell one can better open the shell with the
`www-data` user:

    docker exec -it -u www-data pmwiki-base-ctr bash

## View logs

You can view the logs with:

     docker compose  -f .devcontainer/docker-compose.yml  logs -f

## Opening devcontainer with vscode

Instead of starting the devcontainer with `docker compose` you can also open it with
vscode. In vscode you have `php` debugging support. Convenient if you want to develop
a cookbook `php` script.

Open project from folder in vscode with command

    'Dev Containers: Open folder in Container...'

or from command line when in folder:

      code .

The vscode editor will opening the folder detect the `.devcontainer/` folder and ask
you to "Reopen in Container". When you confirm then vscode will be opened in the
container. Vscode will use as workspace folder `/var/www/html/pmwiki` inside the
container.

In vscode you are working inside the devcontainer, so if you open a terminal window
within vscode it gives you a bash shell within the devcontainer.

The devcontainer is setup to use the user `www-data` used by apache and php as the
`remoteUser`. This setting makes the vscode editor to log in the container using the
`www-data` user. Which means that the vscode editor uses the `www-data` when editing
files making sure they can always be read by apache and php.

Then open in browser:

     https://localhost:8080
              or
     https://localhost:8443

Within vscode you can then easily edit and debug php code. The `Dockerfile` for the
container has already buildin a `launch.json` for debugging with xdebug within
vscode. So everything is already setup to directly debug php code.

## Helper scripts

Helper scripts available in the `bin/` directory of this repository, but also builtin
to the container for direct usage within the container.

- `pmwiki_exportfile` `INPUTFILE` `OUTPUTFILE`

  Exports latest source of wikipage `INPUTFILE` as text in `OUTPUTFILE`.

- `pmwiki_importfile` `INPUTFILE` `OUTPUTFILE`

  Imports text content of `INPUTFILE` as a wikipage in `OUTPUTFILE`.

- `pmwiki_remote_ssh_import` `USER@REMOTEHOST:REMOTEPMWIKIDIR`

  **Run this script from a shell in your container.**

  Mirror a remote site without overwriting the new cookbook we are locally
  developing. The name of the new cookbook is determined from the `COOKBOOK`
  environment variable. Your cookbook `X` can consist of directories
  `pmwiki/cookbook/X/` and `pmwiki/pub/X/`. When the remote site is mirrored we make
  sure that we keep these folders of your cookbook `X`, because when mirroring from a
  remote side not having these folders they would get removed! So what you finally
  get is the remote `cookbook/` and `pub/` folder with your cookbook folders added.

  The argument `USER@REMOTEHOST:REMOTEPMWIKIDIR` is an rsync remote location using
  the SSH protocol to mirror the files.

  This script's behavior:

  - the name of your cookbook is taken from the COOKBOOK environment variable.
  - the folder /var/www/html/pmwiki is taken as the local pmwiki folder into which
    data gets mirrored.
  - files bigger then 0.5MB are skipped from mirroring

  Using this script we can easily check whether your new cookbook also works in an
  existing production site.

## Container configuration files

The following config files are used for the devcontainer

- `.devcontainer/docker-compose.yml`

  Configuration for the containers to run, which can be used within vscode, but also
  without vscode when using `docker compose` directly. This compose has only one
  container, the container `pmwiki` defined in `.devcontainer/pmwiki/`. Because we
  only use one container we could have defined to use a `Dockerfile` directly in
  vscode's `.devcontainer/devcontainer.json` file. However the
  `.devcontainer/docker-compose.yml` lets us easily define extra options in how to
  use the container. Eg. port mappings and bindings.

  To avoid port conflicts we map port 80 to 8080 and port 443 to 8443, where we
  expose them only on the localhost interface. Edit this file if you want to use
  other port mappings. You can also change the used version of PmWiki in the
  `PMWIKI_VERSION` argument to the PmWiki container.

  The docker compose configuration bind mounts the following local folders inside the
  local `./data/` folder into the `/var/www/html/pmwiki/` folder inside the `pmwiki`
  container:

  - `wiki.d` for wiki pages
  - `uploads`: for attachments/pictures in pages
  - `local`: for the `local.php` configuration file
  - `cookbook/${CONFIG_COOKBOOK}`: for binding only my cookbook's `php` script(s)
  - `pub/${CONFIG_COOKBOOK}`: for binding only my cookbook's `pub` file(s)

  Actually the `${CONFIG_COOKBOOK}` parameter, which defines the name of your
  cookbook, is only used in the template file `.devcontainer/docker-compose.yml.tpl`
  for the file `.devcontainer/docker-compose.yml`, which gets constructed by the
  `.devcontainer/setup` script. By default the `${CONFIG_COOKBOOK}` parameter is set
  to `mycookbook` in the config file `.devcontainer/config.bash`. The `COOKBOOK`
  environment variable inside your container gets also set to this value.

  Note that these bindings could also be defined in the
  `.devcontainer/devcontainer.json` file, but by defining it in the
  `.devcontainer/docker-compose.yml` the bindings also are applied when not using
  vscode.

- `.devcontainer/pmwiki/Dockerfile`

  The `Dockerfile` defines how the PmWiki container is build. It installs the PmWiki
  version `PMWIKI_VERSION` defined in the `docker-compose.yml` file. The webserver
  used is `apache` on which also `SSL` is enabled. The PmWiki website uses the
  configuration set in `local/config.php` in the local repository folder. It also
  uses the local folders `wiki.d`, `uploads`,`local` and `cookbook` by bind mounting
  them in the container. As developer you can then easily place your cookbook script
  and test pages locally and use them in the container.

  The container is run with the `root` user. This is the same as on a normal linux
  distribution where the apache server is initially run as root to be able to open
  the lower privilige ports, after which the apache server switches to the `www-data`
  user.

- `.devcontainer/devcontainer.json`

  Configuration file for vscode the devcontainer which specifies that vscode

  - use as workspace folder `/var/www/html/pmwiki`
  - use docker compose with file `.devcontainer/docker-compose.yml`
  - use `pmwiki` container in vscode as devcontainer
  - use some plugins in vscode for developing `php`

  this file is only used by vscode, and isn't used if you used `docker compose` to
  start the devcontainer directly.

## What does cookbook `setup` script do?

By default the repository is setup to develop a cookbook called `mycookbook`. This is
convenient so that you directly can start experimenting with a `mycookbook` cookbook.

You can change the cookbook name by editing the file:

- `.devcontainer/config.bash`

  Its content is:

      export CONFIG_COOKBOOK="mycookbook"

  which defines the name of your cookbook used in the
  `.devcontainer/docker-compose.yml` file. Edit in this file the variable
  `CONFIG_COOKBOOK` to your cookbook name.

  Then run

      .devcontainer/setup

  Which creates `data/pub/${CONFIG_COOKBOOK}/` and
  `data/cookbook/${CONFIG_COOKBOOK}/${CONFIG_COOKBOOK}.php`  
  for you and sets the content of `data/local/cookbook.php' to load this cookbook.

  The name should match the subfolders in `data/cookbook/` and `data/pub/`. By
  default we set this to `mycookbook` and made the matching subdirs in
  `data/cookbook/` and `data/pub/` in this repository, so that directly can start
  experimenting with a `mycookbook` cookbook.

Then you can start the container to work on your cookbook. This can be done either
with our without vscode explained in the next two sections.

The `COOKBOOK` environment variable inside your container gets also set to the name
of your container.

## Revert setup to original git files

If you have changed files yourself or by running the `.devcontainer/setup` command or
by the `pmwiki_mirror_remote_site` command, and you want to revert to the original
git files you had after cloning, then you can do this by running the following
commands on the docker host. (not within the container)

1.  If the container is still running, first stop and remove it

         docker compose -f .devcontainer/docker-compose.yml down

2.  To revert all files in working copy to their original version in git

         git checkout -- .

3.  Remove all files not tracked by git

         git clean -df

4.  Then you can start the container fresh again with either `docker compose` or
    `vscode`. Because you get a fresh container then all files in container will be
    from a fresh pmwiki install. Except for the files in the bind folders which
    persist on the host. For example the `local/config.php` file will be taken from
    the `./data/local` bind folder. Thus if you change the config it will persist
    after recreating the container fresh.

For convenience you can add the following alias to your `~/.bashrc`

    alias gitcleanrevert='git checkout -- .;git clean -df'

Instead of reverting and cleaning you could also just remove the folder and do a
fresh git clone.
