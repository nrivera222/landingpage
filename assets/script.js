   (function () {
      const form = document.getElementById('registrationForm');
      const modalEl = document.getElementById('confirmModal');
      const confirmModal = new bootstrap.Modal(modalEl);

      const cName = document.getElementById('cName');
      const cEmail = document.getElementById('cEmail');
      const cRole = document.getElementById('cRole');

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const role = document.getElementById('regRole').value.trim();

        cName.textContent = name || '—';
        cEmail.textContent = email || '—';
        cRole.textContent = role || '—';

        form.reset();
        form.classList.remove('was-validated');

        confirmModal.show();
        
      });
    })();
    