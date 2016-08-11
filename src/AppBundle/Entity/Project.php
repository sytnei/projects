<?php
// src/AppBundle/Entity/Project.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Project
 *
 * @ORM\Table("project")
 * @ORM\Entity
 */

class Project {
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string
	 *
	 * @ORM\Column(name="name", type="string", length=255, nullable=false)
	 */
	protected $name;
	
	/**
	 * @var string
	 *
	 * @ORM\Column(name="slug", type="string", length=255, nullable=false)
	 */
	protected $slug;	
	/**
     * @var ArrayCollection
	 * @ORM\OneToMany(targetEntity="AppBundle\Entity\Document", mappedBy="project")
     */
	 protected $documents;
	 
	 /**
	 * @var ArrayCollection
	 * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company", inversedBy="projects")
	 * @ORM\JoinColumn(name="company_id", referencedColumnName="id", nullable=true)
	 */
	protected $company;
	
	/**
	 * @ORM\Column(type="integer")
	 */
	protected $company_id;
	
	    public function __construct() {
        $this->documents = new ArrayCollection();
    }
	
	/**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
	
	 /**
     * Set name
     *
     * @param string $name
     *
     * @return Companies
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    public function __toString()
    {
        return $this->getName();
    }

	/**
	 * Set slug
	 *
	 * @param string $slug
	 *
	 * @return Document
	 */
	public function setSlug($slug) {
		$this -> slug = $slug;

		return $this;
	}

	/**
	 * Get slug
	 *
	 * @return string
	 */
	public function getSlug() {
		return $this -> slug;
	}

    /**
     * Add document
     *
     * @param \AppBundle\Entity\Document $document
     *
     * @return Project
     */
    public function addDocument(\AppBundle\Entity\Document $document)
    {
        $this->documents[] = $document;

        return $this;
    }

    /**
     * Remove document
     *
     * @param \AppBundle\Entity\Document $document
     */
    public function removeDocument(\AppBundle\Entity\Document $document)
    {
        $this->documents->removeElement($document);
    }

    /**
     * Get documents
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDocuments()
    {
        return $this->documents;
    }
	
		/**
	 * Set company
	 *
	 * @param Company $company
	 * @return Project
	 */
	public function setCompany($company) {
		   if($company === null) {
            if($this->company !== null) {
                $this->company->getProjects()->removeElement($this);
            }
            $this->company = null;
        } else {
           // if(!$company instanceof AppBundle\Entity\Company) {
           //     throw new \InvalidArgumentException('$company must be null or instance of AppBundle\Entity\Company');
           // }
            if($this->company !== null) {
                $this->company->getProjects()->removeElement($this);
            }
            $this->company = $company;
            $company->getProjects()->add($this);
        }
	}

	/**
	 * Get company
	 *
	 * @return Company
	 */
	public function getCompany() {
		return $this -> company;
	}
}
