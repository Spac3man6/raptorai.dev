        document.addEventListener('DOMContentLoaded', function () {
            const tabs = document.querySelectorAll('.tab-button');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const target = tab.getAttribute('data-tab');
                    contents.forEach(content => {
                        content.classList.toggle('hidden', content.id !== target);
                    });
                });
            });
            
            const copyButtons = document.querySelectorAll('.copy-btn');
            copyButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const textToCopy = btn.previousElementSibling.querySelector('p').innerText;
                    const tempTextArea = document.createElement('textarea');
                    tempTextArea.value = textToCopy;
                    document.body.appendChild(tempTextArea);
                    tempTextArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempTextArea);

                    const originalText = btn.innerHTML;
                    btn.innerHTML = 'Copied!';
                    btn.style.backgroundColor = '#10B981';
                    btn.style.color = '#FFFFFF';
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.removeAttribute('style');
                    }, 2000);
                });
            });

            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('main section');
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 150) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('active');
                    }
                });
            });
            
            const effortCtx = document.getElementById('effortChart').getContext('2d');
            Chart.defaults.color = '#9CA3AF';
            
            const effortChart = new Chart(effortCtx, {
                type: 'bar',
                data: {
                    labels: ['Old Strategy', 'New Strategy'],
                    datasets: [
                        {
                            label: 'Keyword Research & Link Building',
                            data: [70, 20],
                            backgroundColor: '#ef4444',
                        },
                        {
                            label: 'Topical Authority Building',
                            data: [15, 50],
                            backgroundColor: '#3b82f6',
                        },
                        {
                            label: 'E-E-A-T & Trust Signals',
                            data: [15, 30],
                            backgroundColor: '#22d3ee',
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            stacked: true,
                            max: 100,
                            grid: { color: 'rgba(255, 255, 255, 0.1)' },
                            ticks: {
                                callback: function(value) { return value + '%' }
                            }
                        },
                        y: {
                            stacked: true,
                            grid: { display: false }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Reallocation of SEO Effort (%)',
                            font: { size: 16 },
                            color: '#E5E7EB'
                        },
                        tooltip: {
                            backgroundColor: '#111827',
                            titleColor: '#E5E7EB',
                            bodyColor: '#D1D5DB',
                            callbacks: {
                                label: function(context) {
                                    return `${context.dataset.label}: ${context.raw}%`;
                                }
                            }
                        },
                        legend: {
                           labels: { color: '#D1D5DB' }
                        }
                    }
                }
            });
        });