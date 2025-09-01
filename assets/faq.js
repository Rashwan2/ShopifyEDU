class FAQSection extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const questions = this.querySelectorAll('.faq-question');
        console.log('Found FAQ questions:', questions.length); // Debug log

        questions.forEach((question, index) => {
            console.log(`Setting up question ${index + 1}:`, question); // Debug log

            question.addEventListener('click', (event) => this.toggleAnswer(event));
            question.addEventListener('keydown', (event) => this.handleKeydown(event));

            // Add some visual feedback that the event listener is attached
            question.style.cursor = 'pointer';
        });
    }

    toggleAnswer(event) {
        console.log('Toggle answer called'); // Debug log

        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        console.log('Question:', question);
        console.log('Answer:', answer);
        console.log('Icon:', icon);

        if (!answer || !icon) {
            console.error('Missing answer or icon element');
            return;
        }

        // Close other open answers
        const allQuestions = this.querySelectorAll('.faq-question');
        allQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('.faq-icon');

                if (otherAnswer && otherIcon) {
                    otherAnswer.classList.remove('active');
                    otherIcon.textContent = '+';
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Toggle current answer
        const isActive = answer.classList.contains('active');
        answer.classList.toggle('active');
        icon.textContent = isActive ? '+' : '−';
        question.setAttribute('aria-expanded', !isActive);

        console.log('Answer toggled, active:', !isActive);
    }

    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleAnswer(event);
        }
    }
}

customElements.define('faq-section', FAQSection);