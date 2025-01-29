const hello = document.createElement("h4");
hello.textContent = "Welcome, I am Lorenzo, web developer and prankster";

function countdown() {
    hello.textContent = hello.textContent.slice(0, -1);

    if (hello.textContent) {
        setTimeout(countdown, 150);
    } else {
        terminal();
    }
}

let line = 0;
function terminal() {
    if (line >= output.length) {
        root.children[0].remove();
    }

    const p = document.createElement("p");
    p.textContent = output[line % output.length];
    root.append(p);

    line++;
    window.scrollTo(0, document.body.scrollHeight);

    if (line < output.length * 2) {
        setTimeout(terminal, 7);
    }
    else {
        setTimeout(() => {
            const notice = document.createElement("h4");
            notice.textContent = "System is empty, data has been copied";

            const linekdin = document.createElement("a");
            linekdin.href = "https://www.linkedin.com/in/lorenzo-cicuttin-15b280324/";
            linekdin.textContent = "linkedin";
            linekdin.target = "_blank";

            const github = document.createElement("a");
            github.href = "https://github.com/9elt";
            github.textContent = "github";
            github.target = "_blank";

            const description = document.createElement("p");
            description.append(
                "For information, you can reach me on ",
                linekdin,
                " or ",
                github
            );

            root.replaceChildren(notice, description);
        }, 2_000);
    }
}

const root = document.createElement("div");
root.id = "root";
root.append(hello);

document.body.append(root);

const output = `\
Job for apache2.service failed because the control process exited with error code.
See "systemctl status apache2.service" and "journalctl -xe" for details.

Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       100G  45G   55G  45% /
tmpfs           16G   1.2G  15G  8% /dev/shm
/dev/sdb1       200G  80G   120G  42% /data

total 28
drwxr-xr-x 2 root root 4096 Jan  4 09:10 Documents
drwxr-xr-x 2 root root 4096 Jan  5 11:11 Downloads
drwxr-xr-x 2 root root 4096 Jan  6 12:30 Music

top - 14:23:45 up 2 days,  5:11,  2 users,  load average: 0.32, 0.38, 0.34
Tasks: 198 total,   1 running, 197 sleeping,   0 stopped,   0 zombie
%Cpu(s):  6.5 us,  2.0 sy,  0.0 ni, 91.0 id,  0.5 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   8192.0 total,   1024.0 free,   2048.0 used,   5120.0 buff/cache
MiB Swap:   2048.0 total,   1024.0 free,   1024.0 used.   4096.0 avail Mem
total 28
drwxr-xr-x 3 root root 4096 Jan 15 13:12 apt.conf.d
drwxr-xr-x 2 root root 4096 Jan 16 10:23 preferences.d
5.10.0-12-amd64
NAME="Ubuntu"
VERSION="20.04.1 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
VERSION_ID="20.04"

Jan 29 14:45:12 localhost systemd[1]: Starting Session 1 of user root.
Jan 29 14:45:13 localhost systemd[1]: Started Session 1 of user root.
Jan 29 14:46:00 localhost sudo[3025]: pam_unix(sudo:session): session closed for user root

[   65.238287] usb 1-1.3: USB disconnect, device number 4
[   66.352278] usb 1-1.3: new high-speed USB device number 5 using ehci-pci
[   66.478322] usb 1-1.3: New USB device found, idVendor=1234, idProduct=5678
[   66.478328] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[   66.478331] usb 1-1.3: Product: External Storage
[   66.478334] usb 1-1.3: Manufacturer: Manufacturer Corp
[   66.478337] usb 1-1.3: SerialNumber: 00123456789A

NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0  100G  0 disk 
├─sda1   8:1    0  100G  0 part /
sdb      8:16   0  200G  0 disk 
├─sdb1   8:17   0  200G  0 part /data

root       1  0.0  0.1 169436  6312 ?        Ss   Jan21   1:29 /sbin/init
root     222  0.0  0.1  36524  3244 ?        Ss   Jan21   0:12 /usr/libexec/gnome-session-binary
root     2221  0.1  0.1 106348  5264 ?        S    14:23   0:01 gnome-terminal

-rw-r--r-- 1 root root  40320 Jan 29 09:12 /var/log/syslog
-rw-r--r-- 1 root root   1435 Jan 29 09:10 /var/log/auth.log
-rw-r--r-- 1 root root   2480 Jan 29 08:50 /var/log/dmesg

total 4
drwxr-xr-x 2 root root 4096 Jan  5 15:30 bin
drwxr-xr-x 3 root root 4096 Jan  7 11:32 etc
drwxr-xr-x 2 root root 4096 Jan  8 14:20 lib

[INFO] [2025-01-29 14:15:22] Server is up and running
[INFO] [2025-01-29 14:15:23] Connecting to database
[ERROR] [2025-01-29 14:16:03] Database connection failed: Connection timeout

ss -tuln
Netid  State      Recv-Q Send-Q Local Address:Port               Peer Address:Port
tcp   LISTEN     0      128      *:80                          *:*
tcp   LISTEN     0      128      *:22                          *:*
tcp   LISTEN     0      128      *:443                         *:*

free -m
              total        used        free      shared  buff/cache   available
Mem:           8192         2048         1024          256         5120         4096
Swap:          2048         1024         1024

lsmod | grep nvidia
nvidia_drm             53248  0
nvidia_modeset       1230848  1 nvidia_drm
nvidia              20869120  2 nvidia_modeset
drm_kms_helper        155648  1 nvidia_drm

[INFO] Starting backup process...
[INFO] Backup completed successfully at 14:45:32

[INFO] Scanning directory /home/user...
[INFO] File scan completed at 14:45:45

[ERROR] Failed to mount /dev/sdb1: Device is busy

ls -l /home
total 8
drwxr-xr-x 3 root root 4096 Jan 25 10:50 user

ps aux | grep firefox
root      2645  5.5  3.1 1045672 12432 ?       Sl   Jan 25  12:22 /usr/lib/firefox/firefox
root      2692  0.1  0.3 1245884 5424 ?       Sl   Jan 25  1:45 /usr/lib/firefox/firefox

last -n 10
user   pts/0        192.168.1.10    Mon Jan 29 14:10   still logged in
root   tty1                         Mon Jan 29 14:05   gone - no logout

uptime
 14:23:45 up 2 days,  5:11,  2 users,  load average: 0.32, 0.38, 0.34

ls -al /etc/ssl
total 12
drwxr-xr-x 2 root root 4096 Jan  5 12:01 certs
drwxr-xr-x 2 root root 4096 Jan  6 14:10 private
-rw-r--r-- 1 root root  1955 Jan  7 11:33 openssl.cnf

rm -rf /tmp/testdir
rm: cannot remove '/tmp/testdir': No such file or directory

dmesg | grep eth0
[   12.123456] eth0: link up, speed 1000 Mbps, duplex full
[   15.234567] eth0: link down
[   30.345678] eth0: link up, speed 1000 Mbps, duplex full

Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       100G  45G   55G  45% /
tmpfs           16G   1.2G  15G  8% /dev/shm
/dev/sdb1       200G  80G   120G  42% /data

total 32
drwxr-xr-x 2 root root 4096 Jan  4 09:10 Documents
drwxr-xr-x 2 root root 4096 Jan  5 11:11 Downloads
drwxr-xr-x 2 root root 4096 Jan  6 12:30 Music

top - 14:23:45 up 2 days,  5:11,  2 users,  load average: 0.32, 0.38, 0.34
Tasks: 198 total,   1 running, 197 sleeping,   0 stopped,   0 zombie
%Cpu(s):  6.5 us,  2.0 sy,  0.0 ni, 91.0 id,  0.5 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   8192.0 total,   1024.0 free,   2048.0 used,   5120.0 buff/cache
MiB Swap:   2048.0 total,   1024.0 free,   1024.0 used.   4096.0 avail Mem

[   65.238287] usb 1-1.3: USB disconnect, device number 4
[   66.352278] usb 1-1.3: new high-speed USB device number 5 using ehci-pci
[   66.478322] usb 1-1.3: New USB device found, idVendor=1234, idProduct=5678
[   66.478328] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[   66.478331] usb 1-1.3: Product: External Storage
[   66.478334] usb 1-1.3: Manufacturer: Manufacturer Corp
[   66.478337] usb 1-1.3: SerialNumber: 00123456789A

NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0  100G  0 disk 
├─sda1   8:1    0  100G  0 part /
sdb      8:16   0  200G  0 disk 
├─sdb1   8:17   0  200G  0 part /data

-rw-r--r-- 1 root root  40320 Jan 29 09:12 /var/log/syslog
-rw-r--r-- 1 root root   1435 Jan 29 09:10 /var/log/auth.log
-rw-r--r-- 1 root root   2480 Jan 29 08:50 /var/log/dmesg

total 4
drwxr-xr-x 2 root root 4096 Jan  5 15:30 bin
drwxr-xr-x 3 root root 4096 Jan  7 11:32 etc
drwxr-xr-x 2 root root 4096 Jan  8 14:20 lib

[INFO] [2025-01-29 14:15:22] Server is up and running
[INFO] [2025-01-29 14:15:23] Connecting to database
[ERROR] [2025-01-29 14:16:03] Database connection failed: Connection timeout

ss -tuln
Netid  State      Recv-Q Send-Q Local Address:Port               Peer Address:Port
tcp   LISTEN     0      128      *:80                          *:*
tcp   LISTEN     0      128      *:22                          *:*
tcp   LISTEN     0      128      *:443                         *:*

free -m
              total        used        free      shared  buff/cache   available
Mem:           8192         2048         1024          256         5120         4096
Swap:          2048         1024         1024

lsmod | grep nvidia
nvidia_drm             53248  0
nvidia_modeset       1230848  1 nvidia_drm
nvidia              20869120  2 nvidia_modeset
drm_kms_helper        155648  1 nvidia_drm

[INFO] Starting backup process...
[INFO] Backup completed successfully at 14:45:32

[INFO] Scanning directory /home/user...
[INFO] File scan completed at 14:45:45

[ERROR] Failed to mount /dev/sdb1: Device is busy

ls -l /home
total 8
drwxr-xr-x 3 root root 4096 Jan 25 10:50 user

ps aux | grep firefox
root      2645  5.5  3.1 1045672 12432 ?       Sl   Jan 25  12:22 /usr/lib/firefox/firefox
root      2692  0.1  0.3 1245884 5424 ?       Sl   Jan 25  1:45 /usr/lib/firefox/firefox

last -n 10
user   pts/0        192.168.1.10    Mon Jan 29 14:10   still logged in
root   tty1                         Mon Jan 29 14:05   gone - no logout

uptime
 14:23:45 up 2 days,  5:11,  2 users,  load average: 0.32, 0.38, 0.34

ls -al /etc/ssl
total 12
drwxr-xr-x 2 root root 4096 Jan  5 12:01 certs
drwxr-xr-x 2 root root 4096 Jan  6 14:10 private
-rw-r--r-- 1 root root  1955 Jan  7 11:33 openssl.cnf

rm -rf /tmp/testdir
rm: cannot remove '/tmp/testdir': No such file or directory

dmesg | grep eth0
[   12.123456] eth0: link up, speed 1000 Mbps, duplex full
[   15.234567] eth0: link down
[   30.345678] eth0: link up, speed 1000 Mbps, duplex full

shutdown -h now
Broadcast message from root@localhost
The system is going down for halt NOW!

kernel: [   72.345678] systemd[1]: Reached target Shutdown.
kernel: [   72.345689] systemd[1]: Stopping Session 1 of user root.
kernel: [   72.346123] systemd[1]: Stopped target Shutdown.

dd if=/dev/zero of=/dev/sdb1 bs=1M count=1000
dd: writing to '/dev/sdb1': No space left on device

ping -c 4 google.com
PING google.com (142.250.190.78) 56(84) bytes of data.
64 bytes from 142.250.190.78: icmp_seq=1 ttl=55 time=12.3 ms
64 bytes from 142.250.190.78: icmp_seq=2 ttl=55 time=12.4 ms
64 bytes from 142.250.190.78: icmp_seq=3 ttl=55 time=12.5 ms
64 bytes from 142.250.190.78: icmp_seq=4 ttl=55 time=12.6 ms

traceroute google.com
traceroute to google.com (142.250.190.78), 30 hops max, 60 byte packets
 1  192.168.1.1  2.12 ms  1.29 ms  1.04 ms
 2  10.1.1.1  5.23 ms  4.80 ms  4.78 ms
 3  172.16.0.1  20.14 ms  19.89 ms  19.87 ms
 4  142.250.190.78  22.72 ms  22.58 ms  22.68 ms

ifconfig
eth0      Link encap:Ethernet  HWaddr 00:1A:2B:3C:4D:5E
          inet 192.168.1.10  netmask 255.255.255.0  broadcast 192.168.1.255
          inet6 fe80::21a:2bff:fe3c:4d5e 

shutdown -h now
Broadcast message from root@localhost
The system is going down for halt NOW!
`.split("\n");

setTimeout(countdown, 1_000);
