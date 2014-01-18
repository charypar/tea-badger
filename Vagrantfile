# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "saucy64"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/saucy/current/saucy-server-cloudimg-amd64-vagrant-disk1.box"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network :forwarded_port, guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: "192.168.50.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network :public_network

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end

  config.vm.provision :shell, keep_color: true do |shell|
    script = <<-EOD
    echo "Updating apt..."
    sudo apt-get update > /dev/null

    if ! type "python" > /dev/null; then
      echo "Installing Python..."
      sudo apt-get install -y python-software-properties > /dev/null
    fi

    if ! type "ansible-playbook" > /dev/null; then
      echo "Installing Ansible..."
      sudo add-apt-repository -y ppa:rquillo/ansible > /dev/null
      sudo apt-get update > /dev/null
      sudo apt-get install -y ansible > /dev/null
    fi

    echo "Running Ansible..."
    cp -R /vagrant/provisioning/ /home/vagrant/
    chmod -R 644 /home/vagrant/provisioning
    export PYTHONUNBUFFERED=1
    ansible-playbook -i /home/vagrant/provisioning/inventories/vagrant /home/vagrant/provisioning/vagrant.yml --connection=local | tee ~/ansible.log
    rm -rf /home/vagrant/provisioning

    echo "*** DONE ***"
    echo "You may want to add the following lines to your /etc/hosts (C:\\Windows\\System32\\drivers\\etc\\hosts)"
    echo "192.168.50.10  dev.tea-badger.local"
    echo "192.168.50.10  prod.tea-badger.local"
    EOD

    shell.inline = script
  end
end
