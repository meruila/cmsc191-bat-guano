
# CMSC 191 Bat Guano Project
## How to run
1. Clone the repository: `git clone https://github.com/usteng/cmsc191-ef2-project.git`
2. In the `cmsc191-ef2-project` directory, run `npm i` to install the dependencies
3. In the same directory, run `npm run dev`

## Dependencies 
1. Plotly: used for creating stacked bar charts for the phylum distributions [1]
2. Krona Tools: used for creating an interactive visualization of the data [2]

## Features
**Taxonomic ranks**

1. Tabular representation of the taxonomic analysis of samples’ composition from chamber 1 (C1) and chamber 2 (C2).
2. Analysis of strong signals

**Phylum distribution**

1. Shows the comparison of the phylum level distribution of bat guano samples, C1 and C2
2. This was created in relation to Figure 2 of the paper by De Leon et al (2018).

**Krona**

1. Presents the hierarchical  taxonomic data  gathered from C1 and C2 to be explored with zooming, multi-layered pie charts. 
2. Provides user with a user friendly UI for  controlling the visuals of the Krona tools before redirecting to the result Krona chart
3. Displays abundance and hierarchy simultaneously using a radial space-filling display.

## Points for improvement

1. Instead of retrieving data from the strong signals of C1 and C2, it may be better to retrieve the whole genome sequences of the C1 and C2 bacteria for a more accurate representation of the analysis
2. Gather the full taxonomic analysis from the NCBI API via cloud storage used by the researchers (AWS or GCP).


## References
**Main reference**  
De Leon, M.P., Montecillo, A.D., Pinili, D.S., Siringan, M.A.T., & Park, D.S. (2018). Bacterial diversity of bat guano from Cabalyorisa Cave, Mabini, Pangasinan, Philippines: A first report on the metagenome of Philippine bat guano. PLoS One, 13(7), e0200095. doi: 10.1371/journal.pone.0200095

**Technologies used**  
[1] Plotly Technologies Inc. (2015). Collaborative data science. Montréal, QC. https://plot.ly.  
[2] Ondov, B.D., Bergman, N.H. & Phillippy, A.M. Interactive metagenomic visualization in a 
Web browser. BMC Bioinformatics 12, 385 (2011). https://doi.org/10.1186/1471-2105-12-385

