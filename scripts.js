// Data dari dataset Excel yang diberikan
const provinsiData = {
  ACEH: {
    AL: 62.93,
    IBO: 7.53,
    RGM: 9.79,
    KG: 99.22,
    APS: 81.55,
    K: 12.64,
    GR: 0.294,
    Cluster: "2",
  },
  "SUMATERA UTARA": {
    AL: 74.15,
    IBO: 8.04,
    RGM: 13.98,
    KG: 98.92,
    APS: 78.59,
    K: 7.19,
    GR: 0.306,
    Cluster: "2",
  },
  "SUMATERA BARAT": {
    AL: 74.59,
    IBO: 9.38,
    RGM: 13.78,
    KG: 98.46,
    APS: 84.4,
    K: 5.42,
    GR: 0.287,
    Cluster: "2",
  },
  RIAU: {
    AL: 77.68,
    IBO: 9.19,
    RGM: 12.83,
    KG: 98.56,
    APS: 78.49,
    K: 6.36,
    GR: 0.306,
    Cluster: "2",
  },
  JAMBI: {
    AL: 71.76,
    IBO: 9.46,
    RGM: 12.44,
    KG: 98.47,
    APS: 71.97,
    K: 7.26,
    GR: 0.315,
    Cluster: "2",
  },
  "SUMATERA SELATAN": {
    AL: 70.54,
    IBO: 9.75,
    RGM: 12.33,
    KG: 96.95,
    APS: 70.8,
    K: 10.51,
    GR: 0.331,
    Cluster: "2",
  },
  BENGKULU: {
    AL: 70.72,
    IBO: 8.19,
    RGM: 12.76,
    KG: 98.23,
    APS: 79.07,
    K: 12.52,
    GR: 0.343,
    Cluster: "2",
  },
  LAMPUNG: {
    AL: 73.37,
    IBO: 9.52,
    RGM: 14.26,
    KG: 98.63,
    APS: 72.35,
    K: 10.62,
    GR: 0.301,
    Cluster: "2",
  },
  "KEP. BANGKA BELITUNG": {
    AL: 76.06,
    IBO: 8.92,
    RGM: 17.21,
    KG: 98.62,
    APS: 72.69,
    K: 5.08,
    GR: 0.235,
    Cluster: "0",
  },
  "KEP. RIAU": {
    AL: 89.26,
    IBO: 10.41,
    RGM: 15.14,
    KG: 98.55,
    APS: 85.56,
    K: 4.78,
    GR: 0.357,
    Cluster: "0",
  },
  "DKI JAKARTA": {
    AL: 87.84,
    IBO: 11.21,
    RGM: 15.5,
    KG: 98.62,
    APS: 79.95,
    K: 4.14,
    GR: 0.431,
    Cluster: "0",
  },
  "JAWA BARAT": {
    AL: 76.62,
    IBO: 11.41,
    RGM: 19.04,
    KG: 98.45,
    APS: 71.15,
    K: 7.08,
    GR: 0.428,
    Cluster: "0",
  },
  "JAWA TENGAH": {
    AL: 73.15,
    IBO: 9.1,
    RGM: 17.33,
    KG: 99.02,
    APS: 71.6,
    K: 9.58,
    GR: 0.364,
    Cluster: "0",
  },
  "DI YOGYAKARTA": {
    AL: 80.1,
    IBO: 10.52,
    RGM: 14.08,
    KG: 98.61,
    APS: 90.36,
    K: 10.4,
    GR: 0.428,
    Cluster: "0",
  },
  "JAWA TIMUR": {
    AL: 69.36,
    IBO: 10.51,
    RGM: 15.76,
    KG: 98.84,
    APS: 76.44,
    K: 9.56,
    GR: 0.373,
    Cluster: "0",
  },
  BANTEN: {
    AL: 75.17,
    IBO: 10.99,
    RGM: 16.55,
    KG: 98.48,
    APS: 71.91,
    K: 5.7,
    GR: 0.359,
    Cluster: "0",
  },
  BALI: {
    AL: 77.56,
    IBO: 10.61,
    RGM: 16.35,
    KG: 98.87,
    APS: 85.17,
    K: 3.8,
    GR: 0.348,
    Cluster: "0",
  },
  "NUSA TENGGARA BARAT": {
    AL: 68.52,
    IBO: 9.54,
    RGM: 12.97,
    KG: 98.41,
    APS: 77.81,
    K: 11.91,
    GR: 0.364,
    Cluster: "2",
  },
  "NUSA TENGGARA TIMUR": {
    AL: 54.84,
    IBO: 8.79,
    RGM: 14.91,
    KG: 98.02,
    APS: 75.75,
    K: 19.02,
    GR: 0.316,
    Cluster: "2",
  },
  "KALIMANTAN BARAT": {
    AL: 71.57,
    IBO: 7.48,
    RGM: 15.41,
    KG: 98.13,
    APS: 69.39,
    K: 6.25,
    GR: 0.314,
    Cluster: "2",
  },
  "KALIMANTAN TENGAH": {
    AL: 75.23,
    IBO: 7.88,
    RGM: 12.7,
    KG: 98.16,
    APS: 68.33,
    K: 5.26,
    GR: 0.304,
    Cluster: "2",
  },
  "KALIMANTAN SELATAN": {
    AL: 74.82,
    IBO: 9.13,
    RGM: 13.54,
    KG: 98.73,
    APS: 72.31,
    K: 4.02,
    GR: 0.298,
    Cluster: "2",
  },
  "KALIMANTAN TIMUR": {
    AL: 84.44,
    IBO: 8.55,
    RGM: 15.26,
    KG: 98.77,
    APS: 81.84,
    K: 5.51,
    GR: 0.31,
    Cluster: "2",
  },
  "KALIMANTAN UTARA": {
    AL: 77.44,
    IBO: 9.07,
    RGM: 14.05,
    KG: 98.28,
    APS: 78.89,
    K: 5.38,
    GR: 0.259,
    Cluster: "2",
  },
  "SULAWESI UTARA": {
    AL: 68.44,
    IBO: 10.23,
    RGM: 12.82,
    KG: 99.25,
    APS: 72.48,
    K: 6.7,
    GR: 0.347,
    Cluster: "2",
  },
  "SULAWESI TENGAH": {
    AL: 62.44,
    IBO: 8.87,
    RGM: 14.23,
    KG: 98.74,
    APS: 74.16,
    K: 11.04,
    GR: 0.309,
    Cluster: "2",
  },
  "SULAWESI SELATAN": {
    AL: 70.1,
    IBO: 12.21,
    RGM: 15.07,
    KG: 98.61,
    APS: 73.17,
    K: 7.77,
    GR: 0.36,
    Cluster: "2",
  },
  "SULAWESI TENGGARA": {
    AL: 70.36,
    IBO: 8.64,
    RGM: 13.99,
    KG: 98.72,
    APS: 75.73,
    K: 10.63,
    GR: 0.365,
    Cluster: "2",
  },
  GORONTALO: {
    AL: 65.92,
    IBO: 7.48,
    RGM: 15.27,
    KG: 98.91,
    APS: 72.7,
    K: 13.87,
    GR: 0.413,
    Cluster: "2",
  },
  "SULAWESI BARAT": {
    AL: 66.64,
    IBO: 8.38,
    RGM: 12.83,
    KG: 98.82,
    APS: 72.09,
    K: 10.71,
    GR: 0.33,
    Cluster: "2",
  },
  MALUKU: {
    AL: 59.96,
    IBO: 7.8,
    RGM: 14.37,
    KG: 98.84,
    APS: 77.7,
    K: 15.78,
    GR: 0.291,
    Cluster: "2",
  },
  "MALUKU UTARA": {
    AL: 59.17,
    IBO: 6.96,
    RGM: 11.86,
    KG: 98.65,
    APS: 76.02,
    K: 6.03,
    GR: 0.296,
    Cluster: "2",
  },
  "PAPUA BARAT": {
    AL: 62.96,
    IBO: 6.38,
    RGM: 13.14,
    KG: 98.25,
    APS: 75.32,
    K: 21.09,
    GR: 0.385,
    Cluster: "2",
  },
  "PAPUA BARAT DAYA": {
    AL: 65.75,
    IBO: 6.32,
    RGM: 13.73,
    KG: 98.77,
    APS: 81.14,
    K: 16.95,
    GR: 0.347,
    Cluster: "2",
  },
  PAPUA: {
    AL: 62.24,
    IBO: 9.24,
    RGM: 14.84,
    KG: 98.46,
    APS: 80.38,
    K: 18.09,
    GR: 0.405,
    Cluster: "0",
  },
  "PAPUA SELATAN": {
    AL: 48.44,
    IBO: 6.45,
    RGM: 13.96,
    KG: 97.44,
    APS: 71.68,
    K: 19.35,
    GR: 0.424,
    Cluster: "1",
  },
  "PAPUA TENGAH": {
    AL: 28.71,
    IBO: 5.27,
    RGM: 15.49,
    KG: 98.09,
    APS: 47.65,
    K: 27.6,
    GR: 0.355,
    Cluster: "1",
  },
  "PAPUA PEGUNUNGAN": {
    AL: 6.76,
    IBO: 3.04,
    RGM: 16.48,
    KG: 96.55,
    APS: 56.09,
    K: 29.66,
    GR: 0.346,
    Cluster: "1",
  },
};

const urgentMessages = {
  AL: "⚡ Pemerintah harus mempercepat pembangunan infrastruktur listrik terutama di daerah terpencil, dengan memanfaatkan energi terbarukan (PLTS, mikrohidro), serta memberikan subsidi jaringan listrik perlu diarahkan agar keluarga miskin tetap mampu mengakses listrik yang stabil.",
  IBO: "🌐 Internet untuk Pembelajaran Online Lemah: Perluasan jaringan internet berbasis BTS dan fiber optic harus diprioritaskan, terutama di sekolah pedesaan serta menghadirkan paket data edukasi murah bagi siswa dan guru.",
  RGM: "👩‍🏫 Rasio Murid dan Guru SMA Tidak Seimbang: Rekrutmen dan distribusi guru perlu diperbaiki agar pemerataan lebih terjamin. Daerah dengan kekurangan guru bisa diberi program insentif, seperti tunjangan khusus atau kontrak ikatan dinas.",
  KG: "📚 Kualitas Guru Rendah: Pemerintah harus meningkatkan kualitas melalui pelatihan berkelanjutan (continuous professional development) berbasis teknologi. Sistem sertifikasi guru juga harus lebih menekankan pada kompetensi pedagogik dan digital.",
  APS: "🎓 Angka Partisipasi Sekolah (APS) SMA Rendah: Pemerintah dapat memberikan beasiswa afirmatif untuk siswa miskin, memperkuat program KIP Kuliah/KIP Sekolah, serta membangun lebih banyak SMA/SMK di daerah minim sekolah. Kampanye kesadaran pentingnya pendidikan juga perlu ditingkatkan.",
  K: "💸 Angka Kemiskinan Tinggi: Program perlindungan sosial (PKH, BLT, sembako) harus disinergikan dengan program pemberdayaan ekonomi, seperti pelatihan kerja, akses kredit UMKM, dan padat karya. Pendidikan vokasi bisa diarahkan agar sesuai dengan kebutuhan pasar kerja lokal.",
  GR: "⚖ Gini Rasio Tinggi (ketimpangan lebar): Kebijakan redistribusi harus diperkuat, misalnya melalui pajak progresif, subsidi tepat sasaran, serta pemerataan pembangunan antarwilayah. Di sisi pendidikan, harus dipastikan semua kalangan (miskin maupun kaya) mendapat akses yang setara terhadap layanan sekolah berkualitas.",
};

const clusterInfo = {
  0: {
    name: "Maju",
    color: "cluster-0",
    desc: "Provinsi dengan akses listrik, internet, dan rasio guru yang baik, serta prevalensi kemiskinan yang rendah.",
  },
  1: {
    name: "Tertinggal",
    color: "cluster-1",
    desc: "Provinsi dengan nilai rendah di hampir semua indikator dasar seperti akses listrik, internet, ketersediaan guru, dan prevalensi kemiskinan yang tinggi.",
  },
  2: {
    name: "Menengah",
    color: "cluster-2",
    desc: "Provinsi dengan kinerja yang mendekati rata-rata nasional di sebagian besar indikator.",
  },
};

const calculateStats = () => {
  const features = ["AL", "IBO", "RGM", "KG", "APS", "K", "GR"];
  const means = {};
  const stds = {};

  features.forEach((feature) => {
    const values = Object.values(provinsiData).map((p) => p[feature]);
    means[feature] = values.reduce((a, b) => a + b, 0) / values.length;
    stds[feature] = Math.sqrt(
      values
        .map((x) => Math.pow(x - means[feature], 2))
        .reduce((a, b) => a + b, 0) / values.length
    );
  });

  return { means, stds };
};

const { means, stds } = calculateStats();

const standardizeData = (data) => {
  const standardized = {};
  Object.keys(data).forEach((provinsi) => {
    standardized[provinsi] = {};
    Object.keys(data[provinsi]).forEach((feature) => {
      if (feature !== "Cluster") {
        standardized[provinsi][feature] =
          (data[provinsi][feature] - means[feature]) / stds[feature];
      } else {
        standardized[provinsi][feature] = data[provinsi][feature];
      }
    });
  });
  return standardized;
};

const standardizedData = standardizeData(provinsiData);

const calculateCentroids = () => {
  const features = ["AL", "IBO", "RGM", "KG", "APS", "K", "GR"];
  const centroids = {
    0: Array(features.length).fill(0),
    1: Array(features.length).fill(0),
    2: Array(features.length).fill(0),
  };
  const counts = { 0: 0, 1: 0, 2: 0 };

  Object.values(standardizedData).forEach((provinsi) => {
    const cluster = provinsi.Cluster;
    counts[cluster]++;
    features.forEach((feature, idx) => {
      centroids[cluster][idx] += provinsi[feature];
    });
  });

  Object.keys(centroids).forEach((cluster) => {
    centroids[cluster] = centroids[cluster].map((val) => val / counts[cluster]);
  });

  return centroids;
};

const centroids = calculateCentroids();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute("data-page");

      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");

      pages.forEach((page) => page.classList.remove("active"));
      document.getElementById(targetPage).classList.add("active");

      navMenu.classList.remove("show");
    });
  });

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  const provinsiSelect = document.getElementById("provinsi-select");
  Object.keys(provinsiData).forEach((provinsi) => {
    const option = document.createElement("option");
    option.value = provinsi;
    option.textContent = provinsi;
    provinsiSelect.appendChild(option);
  });

  provinsiSelect.addEventListener("change", updateAnalysis);

  const predictBtn = document.getElementById("predict-btn");
  predictBtn.addEventListener("click", predictCluster);

  updateAnalysis();

  loadSVGMap();
});

function updateAnalysis() {
  const provinsiSelect = document.getElementById("provinsi-select");
  const selectedProvinsi = provinsiSelect.value;
  const data = provinsiData[selectedProvinsi];
  const resultDiv = document.getElementById("analysis-result");

  if (!data) {
    resultDiv.innerHTML =
      '<div class="alert alert-danger">Data untuk provinsi ini tidak ditemukan.</div>';
    return;
  }

  const { AL, IBO, RGM, KG, APS, K, GR, Cluster } = data;

  let html = `
        <h3>Data Provinsi: ${selectedProvinsi}</h3>
        <p>Akses Listrik=${AL}, IBO=${IBO}, RGM=${RGM}, KG=${KG}, APS=${APS}, K=${K}, GR=${GR}</p>
        <div class="alert alert-success">
            ✅ Provinsi ${selectedProvinsi} termasuk <span class="cluster-badge ${clusterInfo[Cluster].color}">Cluster ${Cluster} - ${clusterInfo[Cluster].name}</span>
        </div>
        
        <hr>
        
        <h3>Statistik Provinsi</h3>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${AL}%</div>
                <div class="stat-label">Akses Listrik</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${IBO}%</div>
                <div class="stat-label">Internet untuk Pembelajaran Daring</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${K}%</div>
                <div class="stat-label">Kemiskinan</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${APS}%</div>
                <div class="stat-label">Tingkat Partisipasi Sekolah</div>
            </div>
        </div>
        
        <h3>Analisis dan Rekomendasi</h3>
    `;

  const recommendations = [];
  if (AL < 60) recommendations.push("AL");
  if (IBO < 7) recommendations.push("IBO");
  if (RGM < 10) recommendations.push("RGM");
  if (KG < 97) recommendations.push("KG");
  if (APS < 70) recommendations.push("APS");
  if (K > 15) recommendations.push("K");
  if (GR > 0.35) recommendations.push("GR");

  if (recommendations.length > 0) {
    html += '<div class="priority-list">';
    recommendations.slice(0, 3).forEach((variable, index) => {
      html += `
                <div class="priority-item">
                    <h4>${index + 1}. Prioritas Perbaikan: ${variable}</h4>
                    <p>${urgentMessages[variable]}</p>
                </div>
            `;
    });
    html += "</div>";
  } else {
    html +=
      '<div class="alert alert-info">🎉 Provinsi ini memiliki performa yang baik di semua indikator.</div>';
  }

  resultDiv.innerHTML = html;
}

function predictCluster() {
  const inputs = [
    parseFloat(document.getElementById("input-al").value),
    parseFloat(document.getElementById("input-ibo").value),
    parseFloat(document.getElementById("input-rgm").value),
    parseFloat(document.getElementById("input-kg").value),
    parseFloat(document.getElementById("input-aps").value),
    parseFloat(document.getElementById("input-k").value),
    parseFloat(document.getElementById("input-gr").value),
  ];

  if (inputs.some(isNaN)) {
    document.getElementById(
      "prediction-result"
    ).innerHTML = `<div class="alert alert-danger">❌ Harap isi semua nilai dengan angka yang valid.</div>`;
    return;
  }

  const features = ["AL", "IBO", "RGM", "KG", "APS", "K", "GR"];
  const scaledInputs = inputs.map(
    (value, index) => (value - means[features[index]]) / stds[features[index]]
  );

  const distances = {};
  Object.keys(centroids).forEach((cluster) => {
    let sum = 0;
    for (let i = 0; i < scaledInputs.length; i++) {
      sum += Math.pow(scaledInputs[i] - centroids[cluster][i], 2);
    }
    distances[cluster] = Math.sqrt(sum);
  });

  let minDistance = Infinity;
  let predictedCluster = null;
  Object.keys(distances).forEach((cluster) => {
    if (distances[cluster] < minDistance) {
      minDistance = distances[cluster];
      predictedCluster = cluster;
    }
  });

  const centroid = centroids[predictedCluster];
  const diffs = scaledInputs.map((value, index) =>
    Math.abs(value - centroid[index])
  );

  const contrib = features.map((feature, index) => ({
    feature,
    diff: diffs[index],
  }));
  contrib.sort((a, b) => b.diff - a.diff);

  const top3 = contrib.slice(0, 3);

  const resultDiv = document.getElementById("prediction-result");
  let html = `
        <div class="alert alert-success">
            ✅ Data diprediksi masuk <span class="cluster-badge ${clusterInfo[predictedCluster].color}">Cluster ${predictedCluster} - ${clusterInfo[predictedCluster].name}</span>
        </div>
        
        <h3>Top 3 Rekomendasi Kebijakan</h3>
        <table class="result-table">
            <thead>
                <tr>
                    <th>Variabel</th>
                    <th>Tingkat Prioritas</th>
                </tr>
            </thead>
            <tbody>
    `;

  top3.forEach((item) => {
    html += `
            <tr>
                <td>${item.feature}</td>
                <td>${(item.diff * 100).toFixed(2)}%</td>
            </tr>
        `;
  });

  html += `
            </tbody>
        </table>
        
        <h3>Penjelasan Rekomendasi Kebijakan</h3>
    `;

  top3.forEach((item) => {
    if (urgentMessages[item.feature]) {
      html += `
                <div class="alert alert-info">
                    <strong>${item.feature}:</strong> ${
        urgentMessages[item.feature]
      }
                </div>
            `;
    }
  });

  resultDiv.innerHTML = html;
}

async function loadSVGMap() {
  try {
    const response = await fetch("indonesia-map.svg");
    if (!response.ok) {
      throw new Error("SVG file not found or failed to load.");
    }
    const svgText = await response.text();
    document.getElementById("svg-map-placeholder").innerHTML = svgText;

    const tooltip = document.getElementById("tooltip");
    const provinces = document.querySelectorAll(
      "#svg-map-placeholder svg path"
    );

    provinces.forEach((path) => {
      const id = path.id.toUpperCase().replace(/-/g, " ");
      const data = provinsiData[id];

      if (data) {
        const clusterColorClass = clusterInfo[data.Cluster].color;
        path.classList.add(clusterColorClass);

        path.addEventListener("mouseover", (e) => {
          path.style.stroke = "#333";
          path.style.strokeWidth = "2px";

          tooltip.innerHTML = `
                        <div class="tooltip-header">${id}</div>
                        <div class="tooltip-cluster">
                            <span class="dot cluster-${data.Cluster}"></span>
                            <span>${clusterInfo[data.Cluster].name}</span>
                        </div>
                    `;
          tooltip.classList.add("visible");
        });

        path.addEventListener("mousemove", (e) => {
          tooltip.style.left = `${e.pageX + 15}px`;
          tooltip.style.top = `${e.pageY - tooltip.offsetHeight / 2}px`;
        });

        path.addEventListener("mouseout", () => {
          path.style.stroke = "transparent";
          path.style.strokeWidth = "1px";
          tooltip.classList.remove("visible");
        });

        path.addEventListener("click", () => {
          const provinsiSelect = document.getElementById("provinsi-select");
          provinsiSelect.value = id;
          updateAnalysis();

          document
            .querySelectorAll(".page")
            .forEach((page) => page.classList.remove("active"));
          document.getElementById("analysis").classList.add("active");

          document
            .querySelectorAll(".nav-link")
            .forEach((nav) => nav.classList.remove("active"));
          document
            .querySelector('a[data-page="analysis"]')
            .classList.add("active");
        });
      }
    });
  } catch (error) {
    console.error("Failed to load SVG map:", error);
    document.getElementById(
      "svg-map-placeholder"
    ).innerHTML = `<div class="alert alert-danger">❌ Gagal memuat peta. Pastikan file indonesia-map.svg tersedia.</div>`;
  }
}
