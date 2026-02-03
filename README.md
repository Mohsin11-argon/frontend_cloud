# frontend-cloud (Vite)

Simple Vite + React static frontend intended to be served by **Nginx on port 3000** and deployed to an EC2 instance via **GitHub Actions**.

## Local dev

```bash
cd Downloads/frontend_cloud
npm install
npm run dev
```

## One-time EC2 setup (Ubuntu)

1. Install Nginx:

```bash
sudo apt-get update
sudo apt-get install -y nginx
```

2. Create the web root:

```bash
sudo mkdir -p /var/www/frontend-cloud/releases
sudo ln -sfn /var/www/frontend-cloud/releases /var/www/frontend-cloud/current || true
```

3. Add Nginx server block (listens on **3000**):

- Copy `nginx/frontend-cloud.conf` to `/etc/nginx/sites-available/frontend-cloud.conf`
- Enable it:

```bash
sudo ln -sf /etc/nginx/sites-available/frontend-cloud.conf /etc/nginx/sites-enabled/frontend-cloud.conf
sudo nginx -t
sudo systemctl reload nginx
```

4. Open port 3000:

- **EC2 Security Group**: add inbound rule `TCP 3000` from your IP (or `0.0.0.0/0` if you accept public exposure)
- If you use UFW:

```bash
sudo ufw allow 3000/tcp
```

## GitHub Actions secrets (repo settings)

Create these GitHub **Secrets**:

- `EC2_HOST`: EC2 public IP or DNS
- `EC2_USER`: usually `ubuntu`
- `EC2_SSH_KEY`: private key contents for SSH (PEM)
- `EC2_PORT`: optional, usually `22`

The workflow file is at `.github/workflows/frontend-cloud-deploy.yml` and deploys on pushes to `main`.

