// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-projects",
          title: "publications/projects",
          description: "Research publications and projects explained in a friendly, accessible way.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Professional with 14 years of rich &amp; diverse industrial research experience in Machine Learning, Artificial Intelligence, Operations Research, Signal Processing and Control Systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-pedagogical-walkthrough-of-ramanujan-39-s-1912-note-on-a-set-of-simultaneous-equations",
        
          title: "A Pedagogical Walkthrough of Ramanujan&#39;s 1912 Note on a Set of Simultaneous Equations...",
        
        description: "Understanding Ramanujan&#39;s elegant approach to solving systems of equations using generating functions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ramanujan-simultaneous-equations/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-a-parallelizable-variant-of-hca",
          title: 'A parallelizable variant of HCA',
          description: "Research on parallelizable hierarchical clustering algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_00_parallelizable_hca/";
            },},{id: "projects-a-conjecture-related-to-the-newman-phase",
          title: 'A conjecture related to the Newman phase',
          description: "Mathematical research on the Newman phase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_01_newman_phase/";
            },},{id: "projects-a-note-on-finding-optimal-cut-offs",
          title: 'A note on finding optimal cut-offs',
          description: "Threshold optimization research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_02_optimal_cutoffs/";
            },},{id: "projects-on-extending-the-class-of-convex-functions",
          title: 'On extending the class of convex functions',
          description: "Research on convexity and optimization theory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_03_convex_functions/";
            },},{id: "projects-towards-peer-to-peer-split-learning",
          title: 'Towards peer-to-peer split learning',
          description: "Research on distributed deep learning topologies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_04_split_learning/";
            },},{id: "projects-a-note-on-reducing-computations-in-cnns",
          title: 'A note on reducing computations in CNNs',
          description: "Efficient deep learning architectures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_05_cnns/";
            },},{id: "projects-a-note-on-the-bures-wasserstein-metric",
          title: 'A note on the Bures-Wasserstein metric',
          description: "Research on the Bures-Wasserstein metric",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_06_bures_wasserstein/";
            },},{id: "projects-a-note-on-power-allocation-for-optimal-capacity",
          title: 'A note on power allocation for optimal capacity',
          description: "Power allocation optimization research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_07_power_allocation/";
            },},{id: "projects-a-note-on-load-balancing-in-dc-microgrids",
          title: 'A note on load balancing in DC microgrids',
          description: "Load balancing strategies for DC microgrids",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_08_microgrids/";
            },},{id: "projects-a-linear-programming-approach-for-designing-multilevel-pwm-waveforms",
          title: 'A linear programming approach for designing multilevel PWM waveforms',
          description: "PWM waveform design using linear programming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_09_pwm_multilevel/";
            },},{id: "projects-control-of-permanent-magnet-motors-with-actuation-bounds-using-convex-optimization",
          title: 'Control of Permanent Magnet Motors with Actuation Bounds using Convex Optimization',
          description: "Motor control using convex optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_10_motor_control/";
            },},{id: "projects-optimization-of-relative-and-absolute-thresholding-parameters-in-event-triggered-control",
          title: 'Optimization of Relative and Absolute Thresholding Parameters in Event-triggered Control',
          description: "Event-triggered control optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_11_event_triggered/";
            },},{id: "projects-optimal-finite-dimensional-spectral-densities-for-the-identification-of-continuous-time-mimo-systems",
          title: 'Optimal finite-dimensional spectral densities for the identification of continuous-time MIMO systems',
          description: "System identification for MIMO systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_12_mimo_systems/";
            },},{id: "projects-on-the-primal-dual-dynamics-of-support-vector-machines",
          title: 'On the primal-dual dynamics of support vector machines',
          description: "Analysis of SVM dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_13_svm_dynamics/";
            },},{id: "projects-a-note-on-rank-constrained-solutions-to-linear-matrix-equations",
          title: 'A note on rank constrained solutions to linear matrix equations',
          description: "Rank-constrained matrix equation solutions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_14_rank_constrained/";
            },},{id: "projects-optimal-input-design-for-system-identification-using-spectral-decomposition",
          title: 'Optimal input design for system identification using spectral decomposition',
          description: "Input design for system identification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_15_input_design/";
            },},{id: "projects-a-linear-programming-approach-for-designing-two-level-switched-waveforms-for-power-inverters",
          title: 'A linear programming approach for designing two-level switched waveforms for power inverters',
          description: "Power inverter waveform design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_16_pwm_inverters/";
            },},{id: "projects-d-optimal-input-design-for-identification-of-a-continuous-system-using-sum-of-squares-polynomial",
          title: 'D-optimal input design for identification of a continuous system using sum of squares...',
          description: "D-optimal input design using sum of squares",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_17_d_optimal/";
            },},{id: "projects-some-stability-analysis-of-a-non-linear-time-delayed-feedback-circuit",
          title: 'Some stability analysis of a non-linear time-delayed feedback circuit',
          description: "Stability analysis of non-linear circuits",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_18_nonlinear_circuit/";
            },},{id: "projects-an-improved-pwm-for-a-dual-two-level-inverter-fed-open-end-winding-induction-motor-drive",
          title: 'An improved PWM for a dual two-level inverter fed open-end winding induction motor...',
          description: "PWM improvements for induction motor drives",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper_19_induction_motor/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Shravan_Mohan_CV_updated.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%72%61%76%61%6E.%72%61%6D%6D%6F%68%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
