# ${CONFIG_COOKBOOK_NAME} cookbook for PmWiki

## Description

<span style="color:red">PUT HERE A SHORT DESCRIPTION OF THE COOKBOOK. THE DETAILS ARE
AT RECIPE PAGE.</span>

The details of the
${CONFIG_COOKBOOK_NAME} cookbook are described on
[the cookbook's recipe page](https://www.pmwiki.org/wiki/Cookbook/${CONFIG_COOKBOOK_NAME}).
The source code of this cookbook is at
[the cookbook's repository](${CONFIG_COOKBOOK_REPO_URL}), which also provides a
devcontainer in which you can see the plugin in action and further develop it. The
devcontainer is based on the basic pmwiki devcontainer at
https://github.com/harcokuppens/pmwiki-basic.

## Devcontainer

This repository defines a devcontainer with a basic pmwiki installation with the
${CONFIG_COOKBOOK_NAME} cookbook installed. You can use this repository to see the
cookbook in action in the devcontainer. But you can also use the devcontainer the
further develop this cookbook in vscode.

There are 2 ways to start the devcontainer:

### Run with docker compose (without vscode):

To just run the container do:

     docker compose  -f .devcontainer/docker-compose.yml  up -d --build

You can view the logs with:

     docker compose  -f .devcontainer/docker-compose.yml  logs -f

### Run by opening devcontainer with vscode

In vscode you have `php` debugging support. Convenient if you want to develop a
cookbook `php` script.

Open project from folder in vscode with command

    'Dev Containers: Open folder in Container...'

or from command line when in folder:

      code .

The vscode editor will opening the folder detect the `.devcontainer/` folder and ask
you to "Reopen in Container". When you confirm then vscode will be opened in the
container. Vscode will use as workspace folder `/var/www/html/pmwiki` inside the
container.

The devcontainer is setup to use the user `www-data` used by apache and php as the
`remoteUser`. This setting makes the vscode editor to log in the container using the
`www-data` user. Which means that the vscode editor uses the `www-data` when editing
files making sure they can always be read by apache and php.

Within vscode you can then easily edit and debug php code. The `Dockerfile` for the
container has already buildin a `launch.json` for debugging with xdebug within
vscode. So everything is already setup to directly debug php code.

## Usage

Open in browser:

     http://localhost:8080
              or
     https://localhost:8443

### Credentials

PmWiki allows you to login as an user to edit pages or do any online configuration.

By default we already configure two accounts in `data/local/config.php`:

- a test user which can edit pages:
  - username: testuser
  - password: testuser
- an administrator account which has all rights:
  - username: admin
  - password: admin

### Local folders are binded into container

Mount binding lets you conveniently edit files locally on your docker host, and lets
you persist these folders when the container is restarted from scratch.

The following folders will be binded into the container:

- `wiki.d` for wiki pages
- `uploads`: for attachments/pictures in pages
- `local`: for the `local.php` configuration file
- `cookbook/${CONFIG_COOKBOOK_NAME_LC}`: for binding only my cookbook's `php`
  script(s)
- `pub/${CONFIG_COOKBOOK_NAME_LC}`: for binding only my cookbook's `pub` file(s)

Only the cookbook subdirectory is mounted, because as developer you are only
interested in that specific cookbook. Next to that the `pub/` directory also
containers files installed by PmWiki which you do not want to mess with.

### Open bash shell in container

Because the `docker exec` command by default uses the user defined in `Dockerfile` or
`docker-compose.yml` the following command will open a bash shell with the `root`
user:

    docker exec -it pmwiki-${CONFIG_COOKBOOK_NAME_LC}-1 bash

However, the apache server and php code engine will operate using the `www-data`
user. Hence, when editing via a bash shell one can better open the shell with the
`www-data` user:

    docker exec -it -u www-data pmwiki-${CONFIG_COOKBOOK_NAME_LC}-1 bash

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
