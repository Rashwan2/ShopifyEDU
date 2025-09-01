class FAQSection extends HTMLElement {
    constructor() {
        super();
        this.questions = this.querySelectorAll('.faq-question');
        this.init();
    }

    init() {
        this.questions.forEach(question => {
            question.addEventListener('click', this.toggleAnswer.bind(this));
            question.addEventListener('keydown', this.handleKeydown.bind(this));
        });
    }

    toggleAnswer(event) {
        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        // Close other open answers
        this.questions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('.faq-icon');

                otherAnswer.classList.remove('active');
                otherIcon.textContent = '+';
                otherQuestion.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current answer
        answer.classList.toggle('active');
        icon.textContent = answer.classList.contains('active') ? '−' : '+';
        question.setAttribute('aria-expanded', answer.classList.contains('active'));
    }

    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleAnswer(event);
        }
    }
}

customElements.define('faq-section', FAQSection);